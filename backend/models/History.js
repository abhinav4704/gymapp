module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    weight: DataTypes.FLOAT,
    reps: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    // userId and exerciseId via associations
  });
  return History;
};
