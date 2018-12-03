'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _report = require('./routes/report.routes');

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Config imports
var app = (0, _express2.default)();

// MiddleWares


// Routes imports
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cors2.default)());

// MongoDB Connection
_mongoose2.default.connect(_config2.default.MONGO_URL, function (error) {
  console.log(_config2.default.MONGO_URL);
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
});

// Routes
app.use('/report', _report2.default);

exports.default = app;