// const {
//   getWorkout,
//   getWorkoutById,
//   createWorkout,
//   updateWorkout,
//   deleteWorkout,
//   searchWorkout
// } = require("../controllers/workoutController");
// const router = require("express").Router();

// router.get("/", getWorkout);
// router.get("/:id", getWorkoutById);
// router.post("/", createWorkout);
// router.put("/:id", updateWorkout);
// router.delete("/:id", deleteWorkout);
// router.post('/search', searchWorkout);

// module.exports = router;

const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// Define routes
router.get('/workouts', workoutController.getAllWorkouts);
router.get('/workouts/:id', workoutController.getWorkoutById);
router.post('/workouts', workoutController.createWorkout);
router.put('/workouts/:id', workoutController.updateWorkout);
router.delete('/workouts/:id', workoutController.deleteWorkout);

module.exports = router;