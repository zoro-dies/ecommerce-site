
import React, { useState } from 'react'
import Products from '../components/Products'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    console.log(cat)
    const [filters, setFilters] = useState({});
    const [sort,setSort]  = useState("newest");
   const handlefilters = (e) => {

        const value = e.target.value;
        console.log(value);
        setFilters({...filters,
            [e.target.name]: value,

        });

        
    };
    const handleSort = (e) => {

        const value = e.target.value;
        setSort(value)

        
    };
    console.log(filters);
    console.log(sort);

    return (
        <div>
            <Navbar/>
        <div class = "productsContainer">
           <h1 className='prodTitle'> Dresses</h1>
           <div class = "filterContainer">
                <div className='filter'> 
                    <span className='filterText'> Filter Products</span>
                    <select name = "color" className='select' onChange = {(e)=>handlefilters(e)}>
                        <option disabled selected >
                            Color
                        </option>
                        <option> White </option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Green</option>
                        <option>Pink</option>
                    </select>

                    <select className='select' name = "size"  onChange={(e) => handlefilters(e)}>
                        <option disabled selected>
                            Size
                        </option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                        
                    </select>
                </div>
                <div className='filter'>
                <span className='filterText'> Sort Products</span>
                <select className='select' onChange={handleSort}>
                        <option value = "newest">Newest</option>
                        <option vlaue = "asc">Price (asc)</option>
                        <option value = "desc">Price (desc)</option>
                        
                        
                    </select>
                </div>  
           </div> 

           <Products cat = {cat} filters = {filters} sort = {sort}/>  

        </div>
        <Footer/>
        </div>

    )
}

export default ProductList