const express = require('express')
const bodyParser= require("body-parser")

const app = express()
app.use(bodyParser.json());
const Sequelize = require("sequelize")
const sequelize = require("./database")
const User = require("./model/userModel")
const Exercises = require("./model/exercise")
const WorkoutSplit= require("./model/workoutSplit")
const WorkoutPart = require("./model/workoutPart")
const UserExerciseStats = require("./model/userStats")
const WorkoutLog = require("./model/workoutLog");
 const UserController = require('./controller/userController');

User.hasOne(WorkoutSplit, { foreignKey: 'userId', onDelete: "CASCADE" });
WorkoutSplit.belongsTo(User, {foreignKey:'userId',onDelete:"CASCADE"})

User.hasMany(WorkoutLog,{foreignKey:"userId", onDelete:"CASCADE"})
WorkoutSplit.hasMany(WorkoutLog,{foreignKey:"splitId",onDelete:"CASCADE"})
Exercises.hasMany(WorkoutLog,{foreignKey:"exerciseId",onDelete:"CASCADE"})
// 2. WorkoutSplit has many WorkoutParts
WorkoutSplit.hasMany(WorkoutPart,{foreignKey:"splitId",onDelete:"CASCADE"})
WorkoutPart.belongsTo(WorkoutSplit, { foreignKey: "splitId" });

WorkoutPart.belongsToMany(Exercises,{through:'Workoutexercises'})
Exercises.belongsToMany(WorkoutPart,{through:"Workoutexercises"})

User.hasMany(UserExerciseStats,{foreignKey:"userId",onDelete:"CASCADE"})
UserExerciseStats.belongsTo(User,{foreignKey:"userId",onDelete:"CASCADE"})
Exercises.hasMany(UserExerciseStats,{foreignKey:"exerciseId"})






sequelize
.sync({alter:true,force:true})
.then(result=>{
  app.listen(3000)
})
.catch(err=>{
  console.log(err)
})

app.post('/signup',UserController.createUser)

app.get('/', (req, res) => {
    
    res.send('Hello, World!');
  });

