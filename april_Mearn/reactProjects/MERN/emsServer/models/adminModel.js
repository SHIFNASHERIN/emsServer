const mongoose=require('mongoose')


// admin
const adminScemea=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    psw:{
        type:String,
        required:true,
        trim:true 
    }
})

const admins=new mongoose.model('admins',adminScemea)

module.exports=admins