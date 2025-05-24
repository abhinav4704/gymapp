module.exports = (sequelize, DataTypes) => {
    const UserSchedule = sequelize.define('UserSchedule', {
      dayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sequence: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
    return UserSchedule;
  };
  