module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define('Workout', {
    exerciseDay: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // userId will be created by association
  });
  return Workout;
};
