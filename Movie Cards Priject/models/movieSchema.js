const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  image: {
    type: String,  
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const movieSchema = mongoose.model("Movie-Card", Schema);

module.exports = movieSchema
