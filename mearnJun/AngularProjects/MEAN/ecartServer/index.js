require('dotenv').config()

const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')

// db connection
require('./Connections/db')

const ecartApp=express()

ecartApp.use(cors())
ecartApp.use(express.json())
ecartApp.use(router)


const port=5000 || process.env.port 
ecartApp.listen(port,()=>{
    console.log(`____Ecart Server Started At Port ${port} ____`);
})