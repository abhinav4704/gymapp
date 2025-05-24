const { Exercise } = require('../database');

exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.findAll();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch exercises', error: err.message });
  }
};

exports.createExercise = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Exercise name required' });

    const exercise = await Exercise.create({ name });
    res.status(201).json({ message: 'Exercise created', exercise });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create exercise', error: err.message });
  }
};
