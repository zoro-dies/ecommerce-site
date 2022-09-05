import React, { useState } from 'react'
import '.././App.css';
import { categories } from '../demoData';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";
  

const CategoryItem = ({item})=>{
    return(
        <div className='catContainer'>
            <Link to = {`/products/${item.category}`}>
            <img className='catImage' src = {item.img} alt = 'Not Found'></img>
            <div className='catInfo'>
                <h1 className='catTitle'>{item.title}</h1>
                <button className='catButton'>Shop Now</button>
            </div>
            </Link>
        </div>
    )

}

export default CategoryItem
