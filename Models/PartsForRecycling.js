import mongoose from 'mongoose';

const partsForRecycleSchema = new mongoose.Schema({
  partId: {
    type: String,
    required: true
  },
  recycled: {
    type: Boolean,
    default: false,
  }
});

export default mongoose.model('recyclingpart', partsForRecycleSchema);
