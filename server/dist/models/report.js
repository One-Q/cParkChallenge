'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reportSchema = new _mongoose.Schema({
  title: { type: String, required: true },
  time: { type: Date, required: true },
  position: {
    type: {
      type: String,
      default: 'Point',
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

reportSchema.index({ position: '2dsphere' });

exports.default = (0, _mongoose.model)('Report', reportSchema);