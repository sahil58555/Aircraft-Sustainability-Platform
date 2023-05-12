const mongoose = require('mongoose');

const aircraftPartsSchema = new mongoose.Schema({
  partId: {
    type: String,
    required: [true, 'partId is required.'],
  },
  partName: {
    type: String,
    required: [true, 'partName is required.'],
  },
  materialComposition: {
    type: String,
    required: [true, 'materialComposition is required.'],
  },
  age: {
    type: Number,
    required: [true, 'age is required.'],
  },
  condition: {
    type: String,
    required: [true, 'condition is required.'],
    enum: [
        'Used',
        'New'
    ],   
  },
  location: {
    type: String,
    required: [true, 'location is required.'],
  },
  manufacturer: {
    type: String,
    required: [true, 'manufacturer is required.'],
  },
  aircraftModel: {
    type: String,
    required: [true, 'aircraftModel is required.'],
  },
  potentialUseCases: {
    type: String,
    required: [true, 'potentialUseCase is required.'],
  },
  remanufacturingPotential: {
    type: Number,
    required: [true, 'remanufacturingPotential is required.'], 
  },
  lifeCycleAssessment: {
    type: Number,
    required: [true, 'lifeCycleAssessment is required.'],
  }
});

module.exports = mongoose.model('aircraftpart', aircraftPartsSchema);

