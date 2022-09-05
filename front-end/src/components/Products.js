import React, { useState } from 'react'
import '.././App.css';
import { popularProducts } from '../demoData';
import { useEffect } from 'react';
import axios from "axios"
import Product from "./Product"


const Products = ({cat , filters , sort})=>{
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const getProducts = async ()=>{
        try{
            
            console.log("In get Products")
            const res = await axios.get(
                cat ? `http://localhost:5000/api/products/?category=${cat}`:
                "http://localhost:5000/api/products/"
                );
            
            
            setProducts(res.data);
            setFilteredProducts(res.data);


        }
        catch(err){
            console.log(err);
        }

    }



    useEffect(()=>{
                getProducts();

    }, [cat])


    useEffect(()=>{
        

        console.log("products", products);

        var filter=[] ;
        if(filters != undefined){

            if(filters.color){
            filter =  products.filter(product => product.color == filters.color );
            
                
            }
            else if(filters.size){
                filter =  products.filter(product => product.size == filters.size );
                
                }
            else if(filters.color && filters.size )
            {
                filter =  products.filter(product => product.size == filters.size || product.color == filters.color);
            }
    }



        console.log("filteredProducts", filter);
        setFilteredProducts(filter);


}, [filters])



    return(
        <div className='prodsContainer'>
            {filteredProducts.map(item =>(
                <Product item ={item} key = {item._id}/>
            ))}
        </div>
    )

}

export default Products
