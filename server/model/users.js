const mongoose= require("mongoose");
const bcrypt =require('bcrypt');
const jwt=require("jsonwebtoken");
const users = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    roll_no:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    email_id:{
        type:String,
        required:true
    },
    mobile_no:{
        type:Number,
        required:true
    },
    id_type:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})



// Hashing Password
users.pre("save", async function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password,12);
    }
    next();
});

//generating JWT
users.methods.generateAuthToken =async function(){
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}


const User=mongoose.model('USER',users);
module.exports= User;