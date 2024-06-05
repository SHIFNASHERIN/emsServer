const wishlists = require("../models/wishlistModel");

exports.addToWishlist=async(req,res)=>{
    // userId
    const userId=req.payload

    // product datas
    const {id,title,price,description,category,image,rating}=req.body 

    try{
       const existingProduct=await wishlists.findOne({id,userId}) 
       if(existingProduct){
        res.status(406).json("product already present in your wishlist")
       }
       else{
        const newProduct=new wishlists({
            userId,id,title,price,description,category,image,rating
        })
        await newProduct.save()
        res.status(200).json(newProduct)
       }

    }
    catch(err){
        res.status(401).json(err)
    }

}

exports.wishlistItems=async(req,res)=>{
    const userId=req.payload 
    try{
        const products=await wishlists.find({userId})
        if(products){
            res.status(200).json(products)
        }
    }
    catch(err){
        res.status(401).json(err)
    }

}
exports.removeWishlist=async(req,res)=>{
    const {_id}=req.params
    try{
        const removedItem=await wishlists.findByIdAndDelete({_id})
        res.status(200).json(removedItem)
    }
    catch(err){
        res.status(401).json(err)
    }
}