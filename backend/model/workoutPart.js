const Sequelize = require("sequelize")

const sequelize = require("../database")

const WorkoutPart = sequelize.define("WorkoutPart", {
    partId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,  // E.g., "Upper", "Lower"
    },
    dayOfWeek: {
      type: Sequelize.STRING,  // E.g., "Monday", "Tuesday"
      allowNull: false,
    },
  });
  
  module.exports = WorkoutPart;
  