const router = require("express").Router();
const Order = require("../models/Order");
const {verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin}= require("./verifyToken")

//CREATE NEW ORDER

router.post("/",  verifyToken ,async(req, res)=>{
        try{
            var order = new Order(req.body)

            await order.save()
            console.log(order);
            res.status(200).json(order);
        }catch(err){
            res.status(500).json(err);
        }
    })



//UPDATE ORDER

router.put("/:id", verifyTokenAndAdmin, async(req, res)=>{
 
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set : req.body,
        },
    { new: true}
    );
    res.status(200).json(updatedOrder);
    }
    catch(err){
        res.status(500).json(err);
    }

})

//DELETE PRODUCT

router.delete("/:id", verifyTokenAndAdmin, async(req, res)=>{

    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart Successfully Deleted...");
    }catch(err){
        res.status(500).json(err);
    }

})

//GET USER ORDERS
router.get("/:userId", verifyTokenAndAuthorization, async(req, res) => {
    try{

        const orders = await Order.find({userId : req.params.userId});
        res.status(200).json(orders);

    }catch(err){
        res.status(500).json(err);
    }
})


//GET All Orders

router.get("/", verifyTokenAndAdmin, async(req, res)=>{
 
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
        
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;