const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a type of workout."
  },
  name: {
    type: String,
    trim: true,
    required: "Enter name of workout."
  },
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  weight: {
    type: Number,
    required: "Enter a weight."
  },
  reps: {
    type: Number,
    required: "Enter number of reps."
  },
  sets: {
    type: Number,
    required: "Enter number of sets."
  },
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
