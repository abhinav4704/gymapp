const Sequelize = require("sequelize")

const sequelize = require("../database")

const WorkoutSplit = sequelize.define("WorkoutSplit", {
    splitId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,  // E.g., "Upper/Lower Split"
    },
  });
  
  module.exports = WorkoutSplit;
  