const { History } = require('../database');

exports.addHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const { exerciseId, weight, reps, date, workoutDay } = req.body;

    if (!exerciseId || !weight || !reps || !date || !workoutDay) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const history = await History.create({ userId, exerciseId, weight, reps, date, workoutDay });
    res.status(201).json({ message: 'History added', history });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add history', error: err.message });
  }
};

exports.getHistoryByUserExercise = async (req, res) => {
  try {
    const { userId, exerciseId } = req.params;
    const historyRecords = await History.findAll({
      where: { userId, exerciseId },
      order: [['date', 'ASC']],
    });
    res.json(historyRecords);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch history', error: err.message });
  }
};
