const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const { sequelize, User, Workout, Exercise, History, UserSchedule } = require('./database');
// const UserController = require('./controller/userController');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
const historyRoutes = require('./routes/historyRoutes');

app.use('/', userRoutes);
app.use('/workouts', workoutRoutes);
app.use('/exercises', exerciseRoutes);
app.use('/history', historyRoutes);

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

// Protected route example
// app.get('/protected', (req, res) => {
//   const token = req.headers['authorization'];

//   if (!token) {
//     return res.status(403).json({ message: 'Token is required' });
//   }

//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     res.json({ message: 'Access granted', user: decoded });
//   } catch (err) {
//     res.status(401).json({ message: 'Invalid or expired token' });
//   }
// });

// // User auth routes
// app.post('/signup', UserController.createUser);
// app.post('/login', UserController.loginUser);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Sync models and start server
sequelize.sync({ alter: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server listening on http://localhost:3000');
    });
  })
  .catch(err => {
    console.error('Failed to sync database:', err);
  });

module.exports = app;
