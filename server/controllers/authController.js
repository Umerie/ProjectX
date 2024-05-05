const {UserModel} = require('../models/user.js')
const mongoose = require('mongoose');

const test = (req,res) =>{
    res.json('test is working');
}

const registerUser = async (req,res) =>{
    try{
        const {name, email, password} = req.body;
        (!name) ? res.json("name is required") : null;
        (!password && password > 6) ? res.json("password is required and must be 6 characters long") : null;
        (!email) ? res.json("email is required") : null;

        const exist = await UserModel.findOne(email) // check if can find email
        if (exist){
            return res.json('Email Taken Already');
        }

        const user = await UserModel.create({
            name: name,
            email: email,
            password: password,
        })

    }catch(error){
        console.log(error);
    }
    
}



module.exports = {test, registerUser}