import { Add, Remove } from '@material-ui/icons'
import React , { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import {addProduct, incProduct} from "../redux/cartRedux"
import Product from './Product'
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const KEY = "pk_test_51Ld83sE70cBv2cmgOi0DQybBiUouBGNexFbEIECutqTSvJlCyt17UKyrPxWGjo9DSSHnraNUWtAhc61R4kPHWqYD00ZBinguWJ"

const Cart = () => {


    const nav = useNavigate();
    const cart = useSelector(state=>state.cart)
    const [cartCopy, setCartCopy] = useState(cart);
    const [stripeToken,setStripeToken] = useState(null)
    const dispatch = useDispatch()
    console.log(cart)
    console.log("key", KEY);
    const handleInc = (product) => {
        dispatch(incProduct(product));
        
    };

    const onToken = (token)=>{
        setStripeToken(token);
    }
    console.log(stripeToken);

    useEffect(async()=>{
        if(stripeToken){
        const body = {
            tokenId: stripeToken,
            amount: 100*(cart.total+40),

        }
        try{
            const res = await axios.post("http://localhost:5000/api/checkout/payment", body);

            nav("/success");
        }
        catch(err){
            console.log("Error",err);
        }

    }

    },[stripeToken])


    return (
        <div className='cartContainer'>
            <Navbar/>
                 <div className='cartWrapper'>
                    <h1 className='cartTitle'>Your Bag</h1>
                    <div className='top'>
                        <button className='topButton'>CONTINUE SHOPPING</button>
                        <div className='toptexts'>
                            <span className='topText'>Shopping Bag(2)</span>
                            <span className='topText'> Your Wishlist </span>
                        </div>
                        <button className='topButton'>CHECKOUT NOW</button>
                    </div>
                    <div className='bottom'>
                        
                       
                            
                        <div className='info'>
                        {
                        cart.products.map(product=>(
                            
                            <div className='product'>
                                <div className='productDetail'>
                                    <img className = "prdImg" src = {product.image}></img>
                                    <div className='details'>
                                        <span className='productName'><b>Product:</b>  {product.title}</span>
                                        <span className='productId'><b>ID:</b>{product._id}</span>
                                        <div className='productColor' style={{backgroundColor: `${product.color}` }}></div>
                                        <span className='productSize'><b>Size:</b> M </span>
                                    </div>
                                </div>
                                <div className='priceDetail'>
                                <div >

                                    <Remove/>
                                    <span className='amount1'>{product.quantity}</span>
                                    <Add onClick={handleInc(product)} />
                                    </div>

                                    <div className='prodPrice'>$ {product.price}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                       
                            
                        <div className='summary'> 
                            <h1 className='summaryTitle'>ORDER SUMMARY</h1> 

                            <div className='summaryItem'>
                                <span className='summaryItemText'>SubTotal</span>
                                <span className='summaryItemPrice'>$ {cart.total}</span>
                            </div>

                            <div className='summaryItem'>
                                <span className='summaryItemText'>Estimated Shipping</span>
                                <span className='summaryItemPrice'>$ 40</span>
                            </div>

                            <div className='summaryItem'>
                                <span className='summaryItemText'>Total Items</span>
                                <span className='summaryItemPrice'> {cart.quantity}</span>
                            </div>

                            <div className='summaryItem'>
                                <span className='summaryItemText' type = "total">Total</span>
                                <span className='summaryItemPrice'>$ {cart.total+40}</span>
                            </div>
                            
                                <StripeCheckout
                                name = "ecommerce shop"
                                image = "https://avatars.githubusercontent.com/u/1486366?v=4"
                                billingAddress
                                shippingAddress
                                description={`Your total is $ ${100*(cart.total+40)}`}
                                amount = {100*(cart.total+40)}
                                token = {onToken}
                                stripeKey = {KEY}
                                >
                                
                                
                            <button className='checkoutButton'>CHECKOUT NOW</button>

                            </StripeCheckout>

                           
                        </div>
                    </div>
                 </div>
            <Footer/>
        </div>
    )
}

export default Cart