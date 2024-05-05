const express = require("express");
const { route } = require("./routes/authRoutes");
const { mongoose } = require('mongoose');
const dotenv = require('dotenv').config() // this is for the process.env.PORT
const app = express()


app.use(express.json());


app.use('/', route);



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Databse Connected')
}).catch((e)=>{
    console.log(e);
})