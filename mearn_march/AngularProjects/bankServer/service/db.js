// import mongoose

const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/bServer')

// model for collection   //schema-feilds and values in model
const User=mongoose.model('User',{
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transaction:[]

})

// export model 
module.exports={
    User
}
