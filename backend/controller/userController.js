const User = require("../model/userModel")
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    try {
        const {username,email,password,weight,height} = req.body;
        if(!username|| !email||!password||!weight||!height){
            return res.status(400).json({ error: 'All fields are required' });
        }
        const hashedpwd = await bcrypt.hash(password,12)
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            height,
            weight
          });
          res.status(201).json({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email
          });
     
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
        
}


const getUser = async (req, res)=>{

}

module.exports = {createUser ,getUser}
