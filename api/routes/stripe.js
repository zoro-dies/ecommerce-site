const router = require("express").Router();
const stripe = require("stripe")("sk_test_51Ld83sE70cBv2cmgmSqU2fMQkbaqnbmTJLuYYOChXqvM2btCY2RTQqZSysUSb2SXeSAY1ncBLRaIwqdfaa8uY33x00Q2DcdHVs")


router.post("/payment", (req, res)=>{
    console.log(req.body)
     stripe.charges.create(
        {
            source : req.body.tokenId.id,
            amount: req.body.amount,
            currency: "usd",

        },
        (stripeErr, stripeRes) =>{
            if(stripeErr){
                console.log(stripeErr);
                res.status(500).json(stripeErr);
            }
            else{
                res.status(200).json(stripeRes);
            }
        }
    )
})
module.exports = router;
