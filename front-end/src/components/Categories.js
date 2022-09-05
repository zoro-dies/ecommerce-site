import React, { useState } from 'react'
import '.././App.css';
import { categories } from '../demoData';
import CategoryItem from './CategoryItem';

const Categories = ()=>{
    return(
        <div className='container'>
            {categories.map(item =>(
                <CategoryItem item ={item}/>
            ))}
        </div>
    )

}

export default Categories
