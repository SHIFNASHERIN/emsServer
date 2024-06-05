// import express
const express=require('express')

// import cors
const cors=require('cors')

// import logic file
const logic=require('./service/logic')

const jwt=require('jsonwebtoken')

// server creation
const server=express()

// incoming json type data convert to js
server.use(express.json())

// connect front-end
server.use(cors({origin:'http://localhost:4200'}))



// set port
server.listen(3000,()=>{
    console.log("_____server started at port 3000_______");
})

const tokenMiddleware=(req,res,next)=>{
    try{
        const token=req.headers['access_token']
        jwt.verify(token,"bankKey123")
        next()
    
    }
    catch{
        res.status(404).json({
            message:"token not verified",
            staus:false,
            statusCode:404
        })

    }

}

// register - post
server.post('/register',(req,res)=>{
    logic.register(req.body.acno,req.body.psw,req.body.uname).then(result=>{
        // converet js to json and send as response
        res.status(result.statusCode).json(result)
    })
})

// login -post
server.post('/login',(req,res)=>{
    logic.login(req.body.acno,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)
  
    })
})

// get user data- get
server.get('/getuser/:acno',tokenMiddleware,(req,res)=>{
    logic.getUser(req.params.acno).then(result=>{
        res.status(result.statusCode).json(result)
 
    })
})

// balance -get
server.get('/balance/:acno',tokenMiddleware,(req,res)=>{
    logic.getBalance(req.params.acno).then(result=>{
        res.status(result.statusCode).json(result)

    })
})
// transfer -post
server.post('/transfer',tokenMiddleware,(req,res)=>{
    logic.moneyTransfer(
        req.body.fromAcno,
        req.body.toAcno,
        req.body.amount,
        req.body.psw,
        req.body.date
        ).then(result=>{
            res.status(result.statusCode).json(result)
    
        })
})

// transaction history-get
server.get('/history/:acno',tokenMiddleware,(req,res)=>{
    logic.getTransaction(req.params.acno).then(result=>{
        res.status(result.statusCode).json(result)

    })
})

// ac delete -delete
server.delete('/deleteac/:acno',tokenMiddleware,(req,res)=>{
    logic.deleteAc(req.params.acno).then(result=>{
        res.status(result.statusCode).json(result)

    })
})

