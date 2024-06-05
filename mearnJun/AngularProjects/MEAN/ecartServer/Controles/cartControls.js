const  mongoose = require("mongoose");
const carts = require("../models/cartModel");


exports.addToCart=async(req,res)=>{
    // user id
    const userId=req.payload
    const {id,title,price,description,category,image,rating,quantity}=req.body 
    try{
        const existingProduct=await carts.findOne({id,userId})
        if(existingProduct){
            existingProduct.quantity+=1
            existingProduct.grantTotal=existingProduct.price*existingProduct.quantity
            await existingProduct.save()
            res.status(200).json("items added in your cart")
        }
        else{
           const newProduct=new carts({
            id,title,price,description,category,image,rating,quantity,userId,grantTotal:price
           }) 
          await newProduct.save()
          res.status(200).json("item added in your cart")

        }
    }
    catch(err){
        res.status(401).json(err)
    }


}

exports.cartItems=async(req,res)=>{
    const userId=req.payload 
    try{
        const products=await carts.find({userId})
        if(products){
            res.status(200).json(products)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.removeCart=async(req,res)=>{
    const {_id}=req.params
    try{
        const removedItem=await carts.findByIdAndDelete({_id})
        res.status(200).json(removedItem)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// empty cart
exports.emptyCart=async(req,res)=>{
    const userId=req.payload
    try{
       await carts.deleteMany({userId})
       res.status(200).json("all items removed !! ")
    }
    catch(err){
        res.status(401).json(err)
    }
}

// increment cart item
exports.incrementCart=async(req,res)=>{
    const {id}=req.params 
   try{ 
    const existingProduct=await carts.findOne({_id:id})
    if(existingProduct){
        existingProduct.quantity+=1
        existingProduct.grantTotal=
        existingProduct.quantity*existingProduct.price
        
        await existingProduct.save()
        res.status(200).json("Quantity incremented")
    }
    else{
        res.status(404).json("product not found")
    }
}
    catch(err){
        res.status(401).json(err)
    }
}


// increment cart item
exports.decrementCart=async(req,res)=>{
    const {id}=req.params 
   try{ 
    const existingProduct=await carts.findOne({_id:id})
    if(existingProduct){
        existingProduct.quantity-=1
        if(existingProduct.quantity==0){
            await carts.deleteOne({_id:id})
            res.status(200).json("item removed")
        }
        else{
            existingProduct.grantTotal=
            existingProduct.quantity*existingProduct.price
            await existingProduct.save()
            res.status(200).json("Quantity decremented")
    
        }

    }
    else{
        res.status(404).json("product not found")
    }
}
    catch(err){
        res.status(401).json(err)
    }
}