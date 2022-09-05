const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const paymentRoute = require("./routes/stripe")
mongoose.connect("mongodb://localhost:27017/ecommerce" , (err) =>{
    if(!err)console.log('DB connection Successfull');
    else console.log('db error');
})
app.use(cors())
app.use(express.json())
app.use("/api/user/" ,userRoute);
app.use("/api/auth/" ,authRoute);
app.use("/api/products/",productRoute)
app.use("/api/checkout/",paymentRoute)

app.listen(5000, () => {
    console.log("Backend Running");
});
