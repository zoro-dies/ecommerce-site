import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = (e)=>{
        console.log(e.target.name)
        if(e.target.name == "username"){
            console.log(e.target.value)
            setUsername(e.target.value)
        }
        else if(e.target.name == "password"){
            console.log(e.target.value)
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();

        try{

            const body = {
                username,
                password
            }

            const res = await axios.post('http://localhost:5000/api/auth/login', body)

              console.log(res);
              nav("/");

        }
        catch(err){
            console.log(err);
        }
    }
    return (
       
            <div className='registerContainer'>
                <div className='loginWrapper'>
                    <h1 className='registerTitle'> SIGN IN</h1>
                    <form className='registerForm'>
                     
                        <input className='loginInput' name = "username" placeholder='Username' onChange={(e)=> handleLogin(e)}/>
                        <input className='loginInput' name = "password" placeholder='Password' onChange={(e)=> handleLogin(e)} /> 
        
    
                        <span className='registerAgreement'>By creating an account, I agree to the terms and conditions.</span>
                        
                        <button className='registerButton' onClick = {(e)=> handleSubmit(e)}>LOGIN</button>
    
                    </form>
                </div>
    
            </div>
    )
}

export default Login