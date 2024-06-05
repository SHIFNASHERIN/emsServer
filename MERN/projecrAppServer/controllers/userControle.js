const users = require("../models/userModel");
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {

    const { userName, email, password } = req.body

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(400).json("user already exist !! please login.")
        }
        else {
            const newUser = new users({
                userName, email, password, gitHub: "", linkedIn: "", profile: ""
            })
            //    store the new object in db collection
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        res.status(401).json(`Register Api Failed ${err}`)
    }
}


exports.login = async (req, res) => {
    const { email, password } = req.body
    try {

        const existUser = await users.findOne({ email, password })
        if (existUser) {
            // login success- token generate
            const token = jwt.sign({ _id: existUser._id }, "supersecretkey123")
            console.log(token);


            res.status(200).json({
                user: existUser,
                token
            })
        }
        else {
            res.status(404).json("incurrect email or passwod")
        }

    }
    catch (err) {
        res.status(401).json(`Login Api Failed ${err}`)

    }
}

exports.editProfile = async (req, res) => {

    const { userName, gitHub, linkedIn } = req.body
    const { _id } = req.params
    const profile = req.file.filename
    console.log(userName);
    console.log(_id);
    console.log(profile);
    // res.send("edit profile request recieved...")

    try {
        const selectedUser = await users.findOne({ _id })
        if (selectedUser) {
            selectedUser.userName = userName
            selectedUser.gitHub = gitHub
            selectedUser.linkedIn = linkedIn
            selectedUser.profile = profile

            // save changes in mongodb
            await selectedUser.save()
            res.status(200).json(`${userName} profile is updated !`)
        }
        else {
            res.status(404).json(`${userName} is not present`)

        }
    }
    catch (err) {
        res.status(401).json(`Profile Edit Api Failed ${err}`)
   }

}

exports.getProfile=async(req,res)=>{
    const {_id}=req.params
    try{

        const userData=await users.findOne({_id})
        if(userData){
            res.status(200).json(userData)

        }
        else{
            res.status(404).json("user not found")
        }

    }
    catch(err){
        res.status(401).json(`getProfile Api Failed ${err}`)

    }
}