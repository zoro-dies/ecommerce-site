import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import '.././App.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";
  

const Product = ({item})=>{
    return(
        <div className='prodContainer'>
            
            <div className='circle'></div>
                <img className='prodImg' src = {item.image}></img>
                <div  className='prodInfo'>

                    <div class = "prodIcon">
                        <ShoppingCartOutlined/>

                    </div>
                    
                    <div class = "prodIcon">
                        <Link to = {`/product/${item._id}`}>
                        <SearchOutlined/>
                        </Link>
                    
                    </div>
                    

                </div>
            
        </div>
    )

}

export default Product