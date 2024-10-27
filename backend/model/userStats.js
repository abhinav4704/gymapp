
const Sequelize = require("sequelize")

const sequelize = require("../database")
const UserExerciseStats = sequelize.define("UserExerciseStats", {
    statsId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lastWeight: {
      type: Sequelize.INTEGER,  // Last weight lifted for the exercise
      allowNull: false,
    },
    lastReps: {
      type: Sequelize.INTEGER,  // Last number of reps for the exercise
      allowNull: false,
    },
  });
  
  module.exports = UserExerciseStats;
  