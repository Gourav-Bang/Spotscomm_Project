const mongoose= require("mongoose");
const bcrypt =require('bcrypt');
const jwt=require("jsonwebtoken");
const inventory = new mongoose.Schema({
    sports:{
        type:String,
        required:true
    },
    nameofequipment:{
        type:String,
        required:true
    },
    categoryofequipment:{
        type:String,
        required:true
    },
    total_qty:{
        type:Number,
        required:true
    },
    issued_qty:{
        type:Number,
        required:true
    }
    
})
const inventory=mongoose.model('INVENTORY',inventory);
module.exports= Inventoryr;