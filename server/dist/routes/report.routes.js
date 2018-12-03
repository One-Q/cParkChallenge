'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _report = require('../controllers/report.controller');

var router = new _express.Router();

/**
 * Route to send a report
 */
router.route('/').post(_report.sendReport);

/**
 * Route to get a list with correponding lat and long
 * @param lat
 * @param long
 */
router.route('/:lat/:long').get(_report.listReports);

exports.default = router;