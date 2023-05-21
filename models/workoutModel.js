const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  media_type: {
    type: String,
  },
  original_name: {
    type: String,
  },
  original_title: {
    type: String,
  },
  poster_path: {
    type: String,
  },
  overview: {
    type: String,
  },
  vote_count: {
    type: Number,
  },
  release_date: {
    type: String,
  },
  vote_average: {
    type: Number,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
