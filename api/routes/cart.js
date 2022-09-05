const router = require("express").Router();
const { verify } = require("jsonwebtoken");
const Cart = require("../models/Cart");
const {verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin}= require("./verifyToken")

//Create

router.post("/", verifyToken, async(req, res)=>{
        try{
            var cart = new Cart(req.body)

            await cart.save()
            console.log(cart);
            res.status(200).json(cart);
        }catch(err){
            res.status(500).json(err);
        }
    })



//Update

router.put("/:id", verifyTokenAndAuthorization ,async(req, res)=>{
 
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set : req.body,
        },
    { new: true}
    );
    res.status(200).json(updatedCart);
    }
    catch(err){
        res.status(500).json(err);
    }

})

//DELETE CART

router.delete("/:id", verifyTokenAndAuthorization, async(req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart Successfully Deleted...");
    }catch(err){
        res.status(500).json(err);
    }
})

//GET USER CART
router.get("/:userId", verifyTokenAndAuthorization, async(req, res)=>{
    try{
        
        const cart = await Cart.findOne({userId : req.params.userId});
        
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err);
    }
})


// GET All CARTS

router.get("/", verifyTokenAndAdmin, async(req, res)=>{
    try{
        const carts = await Cart.find()
        res.status(200).json(carts);

    }
    catch(err){
        res.status(500).json(err);
    }
})

 module.exports = router;