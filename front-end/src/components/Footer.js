import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import '.././App.css'

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className='fleft'>
                <h1 className='flogo'>Ecommerce.</h1>
                <p className='fdesc'>  Description Will Come Here                  
                </p>
                <div className='socialContainer'>
                    <div className='socialIcon'  style={{backgroundColor: "#3B5999"}} >
                        <Facebook/>
                    </div>
                    <div className='socialIcon' style={{backgroundColor: "#E4405F"}} >
                        <Instagram/>
                    </div>
                    <div className='socialIcon' style={{backgroundColor: "#55ACEE"}}>
                        <Twitter/>
                    </div>
                </div>
            </div>
            <div className='fcenter'>
                <h1 className='ftitle'> Navigate</h1>
                <ul className='list'>
                    <li className='listItem'>Home</li>
                    <li className='listItem' >Cart</li>
                    <li className='listItem' >fashion</li>
                    <li className='listItem' >My Profile</li>
                    <li className='listItem' >Terms</li>
                </ul>

            </div>

            <div className='fright'>
                <h1 className='ftitle'> Contact Us</h1>
                <p style={{color: "white"}}>
                    <Room/>25 T , GULBERG LAHORE</p>
                <p style={{color: "white"}}> 
                <Phone/>+92 21932419</p>
                <p style={{color: "white"}}> 
                <MailOutline/>Contact@devs.dev</p>
            </div>

        </div>
    )
}

export default Footer