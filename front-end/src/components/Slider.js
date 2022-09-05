import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import '.././App.css';
import { slideItems } from '../demoData';

const Slider =() => {
    
    const [index , setIndex] = useState(0)
     const handleClick = (direction)=>{

        if(direction ==="left"){
            setIndex(index > 0 ? index-1 : 1 )
        }
        else{
            setIndex(index < 1 ? index+1 : 0)
        }
     };


    return (

        <div className= 'slider'>
            <div className='arrowLeft' onClick = {() => handleClick("left")} >
            <ArrowLeftOutlined/>
            </div>
            
            <div className='wrapper2' style={{transform : `translateX(${index*-100}vw)` }}>
                {slideItems.map((item) =>( 
                <div className='slide' >

                    <div className = 'imageContainer'>
                        <img className='image' src={item.img} alt="Ecommerce" ></img>
                    </div>


                    <div className='info'>
                        <h1 className='title'>{item.title}</h1>
                        <p className='decription'>{item.desc}</p>
                        <button className='button'>Shop Now</button>
                    </div>

                </div>
                ))}


            </div>
            <div className='arrowRight' onClick = {() => handleClick("right")} >
            <ArrowRightOutlined/>
            </div>
        </div>
    )
}
export default Slider