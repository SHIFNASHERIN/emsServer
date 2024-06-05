// import model
const db = require('./db')
const jwt=require('jsonwebtoken')

// register logic
register = (acno, psw, uname) => {
    return db.User.findOne({ acno }).then(user => {
        if (user) {
            return {
                message: "user already present",
                status: false,
                statusCode: 404
            }
        }
        else {
            newuser = new db.User({
                acno: acno,
                uname: uname,
                psw: psw,
                balance: 0,
                transaction: []
            })
            // to reflect the changes done by server  in database
            newuser.save()
            return {
                message: "registered successfully",
                status: true,
                statusCode: 200
            }
        }
    })
}

// login logic
login = (acno, psw) => {
    return db.User.findOne({ acno, psw }).then(user => {
        if (user) {
            // token generation
            const token=jwt.sign({acno},"bankKey123")
            return {
                message: "login success",
                status: true,
                statusCode: 200,
                currentUser: user.uname,
                currentAcno: acno,
                token
            }
        }
        else {
            return {
                message: "incurrect acno or password",
                status: false,
                statusCode: 404
            }
        }
    })
}

getUser = (acno) => {
    return db.User.findOne({ acno }).then(user => {
        if (user) {
            return {
                message: user,
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: "user not exist",
                status: false,
                statusCode: 404
            }
        }
    })

}

getBalance = (acno) => {
    return db.User.findOne({ acno }).then(user => {
        if (user) {
            return {
                message: user.balance,
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: "user not exist",
                status: false,
                statusCode: 404
            }
        }
    })
}

moneyTransfer = (fromAcno, toAcno, amount, psw, date) => {
    return db.User.findOne({ acno: fromAcno, psw }).then(fromUser => {
        if (fromUser) {
            return db.User.findOne({ acno: toAcno }).then(toUser => {
                if (toUser) {
                    amount = parseInt(amount)
                    if (amount > fromUser.balance) {
                        return {
                            message: "insufficient balance",
                            status: false,
                            statusCode: 404
                        }
                    }
                    else{
                        fromUser.balance=fromUser.balance-amount
                        fromUser.transaction.push({type:'DEBIT',amount,date})
                        fromUser.save()

                        toUser.balance=toUser.balance+amount
                        toUser.transaction.push({type:'CREDIT',amount,date})
                        toUser.save()

                        return {
                            message: "transaction success ! ",
                            status: true,
                            statusCode: 200
                        }
                    }

                }
                else {
                    // not to user
                    return {
                        message: "invalid credit crendentials",
                        status: false,
                        statusCode: 404
                    }
                }
            })
        }
        else {
            return {
                message: "invalid debit crendentials",
                status: false,
                statusCode: 404
            }
        }
    })
}

getTransaction=acno=>{
    return db.User.findOne({acno}).then(user=>{
        if(user){
            return {
                message:user.transaction,
                status: true,
                statusCode: 200
            }

        }
        else{
            return {
                message: "user not exist",
                status: false,
                statusCode: 404

            }
        }
    })
}
deleteAc=acno=>{
    return db.User.deleteOne({acno}).then(result=>{
        if(result){
            return {
                message:"bank account deleted",
                status: true,
                statusCode: 200
            }
        }
        else{
            return {
                message:"account not present",
                status: false,
                statusCode: 404
            }
        }
    })
}

module.exports = {
    register, login, getUser, getBalance,moneyTransfer,getTransaction,deleteAc
}