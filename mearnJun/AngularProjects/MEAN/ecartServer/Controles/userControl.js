const users = require("../models/userModel");
const jwt=require('jsonwebtoken')

// register
exports.register=async(req,res)=>{
    const {userName,email,password}=req.body
    try{
       const existingUser= await users.findOne({email})
       if(existingUser){
        res.status(406).json("account already present ! please login ..")
       }
       else{
        const newUser=new users({
            userName,email,password
        })
        await newUser.save()
        res.status(200).json(newUser)
       }
    }
    catch(err){
        res.status(401).json(err)
    }
}

// login
exports.login=async(req,res)=>{
    const {email,password}=req.body
    try{

        const existingUser=await users.findOne({email,password})
        if(existingUser){
            // login
            const token=jwt.sign({userId:existingUser._id},process.env.JWT_SECRET_CODE)
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(404).json("incurrect username or passwod")
        }

    }
    catch(err){
        res.status(401).json(err)
    }

}