import mongoose, { Schema, model } from 'mongoose';

const reportSchema = new Schema({
  title: { type: String, required: true },
  time: { type: Date, required: true},
  position : {
    type: {
      type: String,
      default: 'Point',
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

export default model('Report', reportSchema);