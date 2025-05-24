const express = require('express');
const router = express.Router();
const ExerciseController = require('../controller/exerciseController');

router.get('/', ExerciseController.getAllExercises);
router.post('/', ExerciseController.createExercise);

module.exports = router;
