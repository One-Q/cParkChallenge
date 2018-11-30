'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendReport = sendReport;
exports.listReports = listReports;

var _report = require('../models/report');

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function sendReport(req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      time = _req$body.time,
      position = _req$body.position;


  var report = new _report2.default({
    title: title,
    time: new Date(time),
    position: {
      coordinates: [position.lat, position.long]
    }
  });

  try {
    var newReport = await report.save();
    res.status(201).json(newReport);
  } catch (err) {
    res.status(500).send(err);
  }
}

function listReports(req, res) {
  var _req$params = req.params,
      lat = _req$params.lat,
      long = _req$params.long;


  res.json({ list: 'ok' });
}