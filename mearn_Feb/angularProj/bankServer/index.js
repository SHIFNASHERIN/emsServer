// import express
const express = require('express')

// import logic file
const logic = require('./service/logic')
// impor jwt
const jwt = require('jsonwebtoken')

// app creation

const app = express()

// integrate frontend with server
const cors = require('cors')
app.use(cors({ origin: 'http://localhost:4200' }))

// to convert all incoming json data to js
app.use(express.json())




const jwtMiddleWare = (req, res, next) => {
    try {
        // access data from request body
        const token = req.headers["access_token"]

        // verify the token with secret key
        const data = jwt.verify(token, "supersecretkey123")

        console.log(data);

        next()
    }
    catch {
        res.status(404).json({
            staus: false,
            message: "please login",
            statusCode: 404
        })
    }

}


// register

app.post('/register', (req, res) => {

    logic.register(req.body.acno, req.body.uname, req.body.psw).then(result => {
        res.status(result.statusCode).json(result)
    })

})

// login
app.post('/login', (req, res) => {
    logic.login(req.body.acno, req.body.psw).then(result => {
        res.status(result.statusCode).json(result)
    })
})

// balance
app.get('/balance/:acno', jwtMiddleWare, (req, res) => {
    logic.getBalance(req.params.acno).then(result => {
        res.status(result.statusCode).json(result)
    })
})

// single user
app.get('/getUser/:acno',jwtMiddleWare, (req, res) => {
    logic.getUser(req.params.acno).then(result => {
        res.status(result.statusCode).json(result)
    })
})

// fund transfer
app.post('/transfer', jwtMiddleWare, (req, res) => {
    // toAcno,fromAcno,amount,psw,date
    logic.fundTransfer(
        req.body.toAcno,
        req.body.fromAcno,
        req.body.amount,
        req.body.psw,
        req.body.date

    ).then(result => {
        res.status(result.statusCode).json(result)

    })

})

app.get('/transaction/:acno',jwtMiddleWare, (req, res) => {
    logic.getTransaction(req.params.acno).then(result => {
        res.status(result.statusCode).json(result)

    })
})

app.delete('/deleteAc/:acno',jwtMiddleWare,(req,res)=>{
    logic.deleteAc(req.params.acno).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// port set
app.listen(3000, () => {
    console.log("server started at port 3000");
})



