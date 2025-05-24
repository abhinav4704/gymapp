module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Exercise;
};
