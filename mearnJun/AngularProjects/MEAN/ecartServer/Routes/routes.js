const express=require('express')
const { jwtMiddleware } = require('../middlewares/jwtMiddleware')
const { addToWishlist, wishlistItems, removeWishlist } = require('../Controles/wishlistsControl')
const { addToCart, cartItems, removeCart, emptyCart, incrementCart, decrementCart } = require('../Controles/cartControls')
const { getProduct } = require('../Controles/productControles')
pController=require('../Controles/productControles')
userControl=require('../Controles/userControl')


const router=new express.Router()

router.get('/products/all',pController.getAllProducts)

router.post('/user/register',userControl.register)

router.post('/user/login',userControl.login)

// add to wishlist
router.post('/user/add-to-wishlist',jwtMiddleware,addToWishlist)

// get user wishlist
router.get('/user/wishlist-items',jwtMiddleware,wishlistItems)

// wishlist remove item
router.delete('/user/remove-wishlist/:_id',jwtMiddleware,removeWishlist)

// add to cart
router.post('/user/add-to-cart',jwtMiddleware,addToCart)

router.get('/user/cart-items',jwtMiddleware,cartItems)

router.delete('/user/remove-cart/:_id',jwtMiddleware,removeCart)

router.get('/user/get-product/:id',getProduct)

router.delete('/user/empty-cart',jwtMiddleware,emptyCart)

router.get('/user/cart-increment/:id',jwtMiddleware,incrementCart)

router.get('/user/cart-decrement/:id',jwtMiddleware,decrementCart)


module.exports=router