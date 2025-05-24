const Workout = require('../models/Workout');
const UserSchedule = require('../models/UserSchedule');
const History = require('../models/History');
const Exercise = require('../models/Exercise');





exports.createWorkout = async (req, res) => {
  try {
    const userId = req.user.id;
    const { dayName, exercises } = req.body; // exercises = array of exerciseIds

    if (!dayName || !exercises || !Array.isArray(exercises)) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    const workout = await Workout.create({ userId, dayName });

    await workout.setExercises(exercises); // Sequelize will manage M:N linking

    res.status(201).json({ message: 'Workout created', workoutId: workout.id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create workout', error: err.message });
  }
};

// Get the current day's workout based on schedule and history
exports.getTodayWorkout = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get user's weekly schedule ordered
    const schedule = await UserSchedule.findAll({
      where: { userId },
      order: [['dayOrder', 'ASC']],
    });

    if (schedule.length === 0) {
      return res.status(400).json({ message: 'No workout schedule set' });
    }

    // Find the last completed workout day
    const lastHistory = await History.findOne({
      where: { userId },
      order: [['date', 'DESC']],
    });

    let nextDayIndex = 0;

    if (lastHistory) {
      const lastIndex = schedule.findIndex(d => d.dayName === lastHistory.workoutDay);
      nextDayIndex = (lastIndex + 1) % schedule.length;
    }

    const todayDay = schedule[nextDayIndex].dayName;

    const todaysWorkout = await Workout.findOne({
      where: { userId, dayName: todayDay },
      include: [{ model: Exercise }],
    });

    res.json({
      todayDay,
      exercises: todaysWorkout ? todaysWorkout.Exercises : [],
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to get today workout', error: err.message });
  }
};

// Get all workouts by a user
exports.getWorkoutsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const workouts = await Workout.findAll({
      where: { userId },
      include: [{ model: Exercise }],
    });

    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch workouts', error: err.message });
  }
};