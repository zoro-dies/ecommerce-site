import { Add, Remove } from '@material-ui/icons'
import React, { useState } from 'react' 
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import axios from "axios"

import { useSelector, useDispatch } from 'react-redux'
import {addProduct} from "../redux/cartRedux"

const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState([]);
    const [cartItem, setCartItem] = useState({});
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    console.log(cart)

    const getProduct = async ()=>{
        try{
            
            console.log("In get Product")
            const res = await axios.get(`http://localhost:5000/api/products/${id}`);
            
            console.log(res.data);
            setProduct(res.data);
            console.log(product);


        }
        catch(err){
            console.log(err);
        }



    }

    const handleSize = (e) => {

        const value = e.target.value;
        console.log(value);
        setSize(value)

        
    };

    const handleInc = (e) => {

        
        console.log(quantity);
        var count = quantity+1;
        setQuantity(count);

        
    };

    const handleDec = (e) => {

        
        console.log(quantity);
        if(quantity> 1){
        var count = quantity-1;
        setQuantity(count);
        }

        
    };

    useEffect(()=>{
        getProduct();

}, [id])

const handleClick = ()=>{

    setProduct(product.quantity = quantity);
    dispatch(addProduct({product,quantity}))

}
    return(
        <div>
            <Navbar/>
        <div className='productWrapper'>
            <div className='imGContainer'>
                <img src = {product.image}></img>
            </div>
      
            <div className='descContainer'>
                <h1>{product.title}</h1>
                <p className='desc'>{product.description} </p>
                <span className='price'> $ {product.price} </span>

                <div className='filtersContainer'>
                    <div className='colorFilterContainer'>
                        <span className='filterTitle'> Color </span>
                        <div className='filterColor' style={{backgroundColor: `${product.color}` }}></div>
                        
                    </div>
                    <div>
                    <span className='filterTitle'> Size </span>

                    <select className='select' name = "size"  onChange={(e) => handleSize(e)}>
                        <option disabled selected>
                            Size
                        </option>
                        <option>{product.size}</option>
                        
                        
                    </select>

                    </div>
                </div>

                <div className='addContainer'>

                    <div className='amountContainer'>
                        <Remove onClick={(e) => handleDec(e)}/>
                        <span className='amount'> {quantity} </span>
                        <Add onClick={(e) => handleInc(e)}/>
                    </div>

                    <button className='addButton' onClick={() =>handleClick() }> Add To Cart</button>
                </div>

            </div>



        </div>
        <Footer/>
        </div>
    )
}

export default Product