'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _report = require('../controllers/report.controller');

var router = new _express.Router();

router.route('/').post(_report.sendReport);

router.route('/:lat/:long').get(_report.listReports);

exports.default = router;