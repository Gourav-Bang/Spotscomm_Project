const express = require("express");
const dotenv= require("dotenv");
const app=express();

//Database connection
dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());

const User = require('./model/users');

//Calling Routes so that our app.js looks good
app.use(require('./router/auth'));

//Middleware




app.listen(5000,()=>{
    console.log("Server running on port 5000");
})