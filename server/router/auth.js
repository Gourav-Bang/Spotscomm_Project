const express =require("express");
const router =express.Router();
require('../db/conn');
const User=require("../model/users");
const bcrypt=require("bcrypt");
const jwt =require("jsonwebtoken");

router.get('/', (req,res)=>{
    res.send("Hello World");
});


router.get('/admindashboard', (req,res)=>{
    res.send("Hello admin World");
});

router.get('/clientdashboard', (req,res)=>{
    res.send("Hello client World");
});

router.post('/register',async (req,res)=>{
    const{name,password ,roll_no,batch,email_id,mobile_no,id_type,status} = req.body ;
    
    if(!name || !password || !roll_no|| !batch|| !email_id|| !mobile_no|| !id_type|| !status)
        {
            return res.status(400).json({error:"Please Fill all" });
        }
        try {
           const userExist = await User.findOne({email_id:email_id})
           
           if(userExist){
            return res.status(422).json({error:"Email Already exist" });
          }
          const user = new User({name,password ,roll_no,batch,email_id,mobile_no,id_type,status});
        
          await user.save();
          res.status(201).json({message:"User successfully Registered"});


        } catch(error) {
            console.log(error);
        }
        
});

 router.post('/login',async (req,res)=>
 {
    try {
        const {email_id,password}=req.body;
        if(!email_id || !password)
        {   
            console.log("yes");
            return res.status(400).json({error:"Please Enter Email and Password "});
        }

        const userLogin = await User.findOne({email_id:email_id});
        console.log(userLogin.id_type);
        if(userLogin)
        {
            const token =await userLogin.generateAuthToken();
                res.cookie('jwtoken',token,{
                    expires:new Date(Date.now() + 2589200000),
                    httpOnly:true
                });
            const isMatch =await bcrypt.compareSync(password,userLogin.password);
            if(isMatch)
            {
                res.status(201).json({message:"User successfully Logged In",id_type: userLogin.id_type});
                
            }
            else
            {
                return res.status(400).json({error:"Invalid Password "});
            }
        }
        else
        {
            return res.status(400).json({error:"Invalid Email "});
        }
    } catch (error) {
        console.log(error);
    }
 })


module.exports = router;
