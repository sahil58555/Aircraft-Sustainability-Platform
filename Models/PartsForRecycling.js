const mongoose = require('mongoose');

const partsForRecycleSchema = new mongoose.Schema({
  partId: {
    type: String,
    required: [true, 'partId is required.']
  },
  recycled: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model('recyclingpart', partsForRecycleSchema);
