const Workout = require("../models/workoutModel");

const getWorkout = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the workouts" });
  }
};

const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the workout" });
  }
};

const createWorkout = async (req, res) => {
  try {
    const workout = new Workout({
      id: parseInt(req.body.id),
      media_type: req.body.media_type,
      original_name: req.body.original_name,
      original_title: req.body.original_title,
      poster_path: req.body.poster_path,
      overview: req.body.overview,
      vote_count: parseInt(req.body.vote_count),
      release_date: req.body.release_date,
      vote_average: parseInt(req.body.vote_average),
      content: req.body.content,
      createdAt: req.body.createdAt,
    });

    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the workout" });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      {
        id: req.params.id,
        media_type: req.body.media_type,
        original_name: req.body.original_name,
        original_title: req.body.original_title,
        poster_path: req.body.poster_path,
        overview: req.body.overview,
        vote_count: req.params.vote_count,
        release_date: req.body.release_date,
        vote_average: req.params.vote_average,
        content: req.body.content,
        createdAt: req.body.createdAt,
      },
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the workout" });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndRemove(req.params.id);

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json({ message: "Workout deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the workout" });
  }
};

const searchWorkout = async (req, res) => {
  const { original_title } = req.body;

  try {
    const workouts = await Workout.find({ original_title: original_title });

    if (!workouts || workouts.length === 0) {
      return res.status(400).json({ error: 'No workouts were found' });
    }

    res.status(200).json(workouts);
  } catch (error) {
    console.error('Error searching workouts:', error);
    res.status(500).json({ error: 'An error occurred while searching workouts' });
  }
};

module.exports = {
  getWorkout,
  createWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
  searchWorkout
};
