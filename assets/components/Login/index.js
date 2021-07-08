import React from 'react'; 
// import { useState, useEffect } from 'react';

import '../Login/style.css'; 

function LoginForm(props){
    return(
        <div id="login-wrapper">
            <div id="header-login">
                <h2 className="header-login">Log In</h2>
            </div>
            <form id="login-form">
                <label htmlFor="username-input-login">Username</label>
                <input 
                type="text" 
                id="usernamame-input-login"
                {...props}></input>
                <div>
                    <label htmlFor="pw-input-login">Password</label>
                    <input 
                    type="text" 
                    id="pw-input-login"
                    {...props}
                    ></input>
                </div>
                <button 
                {...props}
                type="submit" 
                className="login-btn btn">Log In{props.children}</button>

                <button
                {...props} 
                type="submit" 
                className="signup-btn">Sign Up{props.children}</button>
            </form>
        </div>
    ); 
}
export default LoginForm; 

