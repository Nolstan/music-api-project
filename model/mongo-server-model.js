const mongoose = require('mongoose');

// Define schema
const createSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: [true, 'Artist name is required'],
    trim: true
  },
  title: {
    type: String,
    required: [true, 'The title is required'],
    trim: true
  },
  artwork: {
    type: String, 
    trim: true
  },
  releaseYear: {
    type: Number,
    default: new Date().getFullYear() // store the year
  },
  uploadedAt: {
    type: Date,
    default: Date.now 
  }
});

// Export the model
const Music = mongoose.model('Music', createSchema);
module.exports = Music;
