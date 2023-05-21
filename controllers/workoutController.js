const Workout = require('../models/workoutModel');

// Get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json({ workouts });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a workout by ID
const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ workout });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new workout
const createWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.status(201).json({ workout: newWorkout });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a workout
const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ workout });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};