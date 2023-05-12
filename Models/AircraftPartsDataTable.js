import mongoose from 'mongoose';

const aircraftPartsSchema = new mongoose.Schema({
  partId: {
    type: String,
    required: true
  },
  partName: {
    type: String,
    required: true,
  },
  materialComposition: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    required: true,
    enum: [
        'Used',
        'New'
    ],   
  },
  location: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  aircraftModel: {
    type: String,
    required: true,
  },
  potentialUseCases: {
    type: String,
    required: true,
  },
});

export default mongoose.model('aircraftpart', aircraftPartsSchema);
