'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/cparkchallenge',
  PORT: process.env.PORT || 8000
};

exports.default = config;