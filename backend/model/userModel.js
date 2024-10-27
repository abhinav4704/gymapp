const Sequelize = require("sequelize")

const sequelize = require("../database")

const User = sequelize.define("User",{
    uid:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,  // Ensures the value is a valid email format
        },
      },
    password: {
        type:Sequelize.STRING,
        allowNull:false
    },
    
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
})

module.exports = User