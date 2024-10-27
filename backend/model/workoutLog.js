const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const WorkoutLog = sequelize.define("WorkoutLog", {
    logId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },


    weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    reps: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
});

module.exports = WorkoutLog;
