const Sequelize = require("sequelize")

const sequelize = require("../database")

const Exercises = sequelize.define("Exercises", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,  // Name of the exercise (e.g., "Bench Press")
    },
    targetbodypart: {
      type: Sequelize.STRING,
      allowNull: false,  // Target muscle group (e.g., "Chest")
    },
  });
  
  module.exports = Exercises;
  