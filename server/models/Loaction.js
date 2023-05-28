const mongoose = require('mongoose');

// Define the schema
const LocationSchema = new mongoose.Schema({
  lat: {
    type: String,
  },
  long: {
    type: String,
  },
  url: {
    type: String,
  },
  status:{
    type: String,
  }
});

// Create a model based on the schema
const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;