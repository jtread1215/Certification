import React from "react"; 
import './style.css'; 

function LoginForm(props) {
    return(
        <div id="login-wrapper">
    <div id="header-login">
        <h2 class="header-login">Log In</h2>
    </div>
    <form id="log-in-form">
        <div>
        <label for="username-input-login">Username</label>
        <input type="text" id="username-input-login">
        </div>
        <div>
            <label for="password-input-login">Password</label>
            <input type="text" id="password-input-login">
        </div>
        <button type="submit" class="login-btn">Log In</button>
        <button type="submit" href="/signup" class="signup-btn">Sign Up</button>
    </form>
    </div>
    );
}

export default LoginForm; 