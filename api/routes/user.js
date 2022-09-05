const router = require("express").Router();
const User = require("../models/User");
const {verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin}= require("./verifyToken")

//update
router.put("/:id", verifyTokenAndAuthorization, async(req, res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, "ecommerce").toString();
    }
    
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set : req.body,
        },
    { new: true}
    );
    res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err);
    }

})


//delete

router.delete("/:id", verifyTokenAndAuthorization, async(req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User Successfully Deleted..");
    }catch(err){
        res.status(500).json(err);
    }
})

//GET USER
router.get("/:id", verifyTokenAndAdmin, async(req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})


//GET All USERS

router.get("/", verifyTokenAndAdmin, async(req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;

