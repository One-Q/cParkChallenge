import mongoose, { Schema, model, Collection } from 'mongoose';


/**
 * Report Model
 * Mandatory fields: title, time and position
 */
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

reportSchema.index({ position: '2dsphere' })

export default model('Report', reportSchema);