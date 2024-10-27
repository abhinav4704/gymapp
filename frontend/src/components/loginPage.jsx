import React from "react";
import { useState } from 'react'
import './login.css'

function Login(){
    return(
        <div className="loginbody">
        <div className="login-container">
            <form action="/login" method="POST" className="login-form">
                <h2>Login</h2>
                <div className="user-box">
                
                    <input type="text"name='username' placeholder="Username"></input>
                </div>
                <div className="user-box">
                   
                    <input type="" name="password" placeholder="Password"></input></div>
                <div className="p-box"><button type="submit" className="login-submit">Login In</button></div>
            </form>
        </div>
        </div>
    )
}

export default Login;