import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Register = () => {

    const nav = useNavigate();
    const [registerForm, setRegisterForm] = useState({
        emailRegister: "",
        passwordRegister: "",
        passwordRegister2: "",
        username: ""
      })

    const emptyFields = () => {
        return registerForm.emailRegister === "" || registerForm.username === "" || registerForm.passwordRegister === "" || registerForm.passwordRegister2 === ""
      }
      const checkPasswords = () => {
        return registerForm.passwordRegister === registerForm.passwordRegister2
      }  


    const onRegister = async (e) => {
        e.preventDefault()
        console.log(registerForm)
        if (emptyFields()) {
          alert("Please fill the missing fields")
          
          return
        }
        if (!checkPasswords()) {
          alert("Passwords don't match")
          return
        }

        try{

           const  body = {
                username : registerForm.username,
                email : registerForm.emailRegister,
                password : registerForm.passwordRegister,
                isAdmin : true

            }

            console.log(body);
            const res = await axios.post('http://localhost:5000/api/auth/register', body)

              console.log(res);
              nav("/");

        }
        catch(err){
            console.log(err);
        }



    }


    const onRegisterChange = (e) => {
        setRegisterForm({
          ...registerForm,
          [e.target.name]: e.target.value
        })
      }

    return (
        <div className='registerContainer'>
            <div className='registerWrapper'>
                <h1 className='registerTitle'> CREATE AN ACCOUNT</h1>
                <form className='registerForm'>
                    <input className='registerInput' placeholder='First Name'/> 
                    <input className='registerInput' placeholder='Last Name'/>
                    <input className='registerInput' placeholder='Username' onChange={onRegisterChange}
                        value={registerForm.username}
                        name='username' />

                    <input type="email" className='registerInput' placeholder='Email' value={registerForm.emailRegister}
                        onChange={onRegisterChange}
                        
                        name='emailRegister'
                    />
                    <input  
                    type="password" 
                    className='registerInput' 
                    placeholder='Password'
                    value={registerForm.passwordRegister}
                    onChange={onRegisterChange}
                    name='passwordRegister'
                    /> 
                    <input 
                    className='registerInput' 
                    placeholder='Confirm Password'
                    type="password"
                    name='passwordRegister2'
                    onChange={onRegisterChange}
                    value={registerForm.passwordRegister2}
                    />

                    <span className='registerAgreement'>By creating an account, I agree to the terms and conditions.</span>
                    
                    <button className='registerButton' onClick={onRegister} >CREATE</button>

                </form>
            </div>

        </div>
    )
}

export default Register