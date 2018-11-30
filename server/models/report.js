import mongoose, { Schema, model, Collection } from 'mongoose';

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