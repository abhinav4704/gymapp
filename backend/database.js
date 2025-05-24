
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('progym', 'root', 'cashew4704', {
    host: 'localhost',
    dialect: 'mysql',
  });


  
  // Import models
  const User = require('./models/User.js')(sequelize, DataTypes);
  const Exercise = require('./models/Exercise')(sequelize, DataTypes);
  const Workout = require('./models/Workout')(sequelize, DataTypes);
  const History = require('./models/History')(sequelize, DataTypes);
  const UserSchedule = require('./models/UserSchedule')(sequelize, DataTypes);
  
  // Setup associations
  User.hasMany(Workout, { foreignKey: 'userId' });
  Workout.belongsTo(User, { foreignKey: 'userId' });
  
  Workout.belongsToMany(Exercise, { through: 'WorkoutExercises', foreignKey: 'workoutId' });
  Exercise.belongsToMany(Workout, { through: 'WorkoutExercises', foreignKey: 'exerciseId' });
  
  User.hasMany(UserSchedule, { foreignKey: 'userId' });
  UserSchedule.belongsTo(User, { foreignKey: 'userId' });
  
  User.hasMany(History, { foreignKey: 'userId' });
  History.belongsTo(User, { foreignKey: 'userId' });
  
  Exercise.hasMany(History, { foreignKey: 'exerciseId' });
  History.belongsTo(Exercise, { foreignKey: 'exerciseId' });
  
  module.exports = {
    sequelize,
    User,
    Exercise,
    Workout,
    History,
    UserSchedule
  };
  