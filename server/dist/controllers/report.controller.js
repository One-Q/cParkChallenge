'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendReport = sendReport;
exports.listReports = listReports;

var _report = require('../models/report');

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Post a report
 * @param req contains the title, time and position of the post
 * @param res
 */
async function sendReport(req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      time = _req$body.time,
      position = _req$body.position;


  if (!title) return res.status(400).json({ error: 'Please enter a title' });

  var report = new _report2.default({
    title: title,
    time: new Date(time),
    position: {
      coordinates: [position.long, position.lat]
    }
  });

  try {
    var newReport = await report.save();
    res.status(201).json({ report: newReport });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

/**
 * Get reports in the area
 * @param req contains lat and long
 * @param res
 */
async function listReports(req, res) {
  var _req$params = req.params,
      lat = _req$params.lat,
      long = _req$params.long;


  if (lat < -90 || lat > 90 || long < -180 || long > 190) {
    return res.status(400).json({ error: 'The lat must be between -90 and 90. The long must be between -180 and 180' });
  }

  var maxDistance = 10000; // in meters
  var limit = 10;
  var timeSort = -1; // 1 = older to new; -1 = new to older

  try {
    var reports = await _report2.default.find({
      position: {
        $near: {
          $maxDistance: maxDistance,
          $geometry: {
            type: 'Point',
            coordinates: [long, lat]
          }
        }
      }
    }).sort({ time: timeSort }).limit(limit);
    res.status(200).json({ reports: reports });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}