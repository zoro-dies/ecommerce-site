const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//Register

router.post("/register",async(req , res)=>{
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, "ecommerce"),
        isAdmin : req.body.isAdmin,

    })

    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    }catch(err){
        res.status(500).json(err);   
    }
})

router.post("/login" , async(req,res)=>{
    try{
        console.log(req.body);
        const user = await User.findOne({username : req.body.username});
        !user && res.status(401).json("Wrong Credentials!!!")

        const hashedPassword =  CryptoJS.AES.decrypt(user.password, "ecommerce");
        const password = hashedPassword.toString(CryptoJS.enc.Utf8);

        password !==req.body.password && res.status(401).json("Wrong Password!!!")

        const accessToken = jwt.sign({
            id : user._id,
            isAdmin: user.isAdmin
        },
        "ecommerce",
        {expiresIn:"3d"}
        
        )
        res.status(200).json({user, accessToken});

    }catch(err){

    }
})

module.exports = router;
