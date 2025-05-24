const express = require('express');
const router = express.Router();
const WorkoutController = require('../controller/workoutController');

const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware); // Protect these routes

router.get('/today', WorkoutController.getTodayWorkout);
router.post('/', WorkoutController.createWorkout);
router.get('/:userId', WorkoutController.getWorkoutsByUser);

module.exports = router;
