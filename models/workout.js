const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workouts = new Schema({
  day: {
    type: Date,
    default: Date.now,
    },
exercises: [{
  type: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  distance: {
    type: Number
  },
  weight: {
    type: Number,
   
  },
  reps: {
    type: Number,
   
  },
  sets: {
    type: Number,
    
  },
    }]
});

const workout = mongoose.model("Workout", workouts);

module.exports = workout;
