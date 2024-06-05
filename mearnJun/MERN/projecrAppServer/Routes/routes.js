const express=require('express')

// router object
const router=new express.Router()
const user=require('../controllers/userControle')
const upload = require('../middlewares/multerMiddleware')
const { jwtMiddleware } = require('../middlewares/jwtmiddleware')


// signup
router.post('/user/register',user.register)

// login 
router.post('/user/login',user.login)

// update profile
router.put('/user/update-profile/:_id',jwtMiddleware,upload.single('profile'),user.editProfile)

// getProfile
router.get('/user/getprofile/:_id',user.getProfile)

module.exports=router



