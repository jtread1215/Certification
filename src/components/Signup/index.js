import React from "react"; 
import "./style.css"; 

function SignupForm(props) {
    return(
        <div id="signup-wrapper">
        <div id="header-signup">
            <h2 class="header-signup">Sign Up</h2>
        </div>
        <form id="sign-up-form">
            <div>
                <label for="first-name-input-signup">First Name</label>
                <input type="text" id="first-name-input-signup" />
            </div>
            <div>
                <label for="last-name-input-signup">Last Name</label>
                <input type="text" id="last-name-input-signup" />
            </div>
            <div>
                <label for="password-input-signup">Password</label>
                <input type="text" id="password-input-login" />
            </div>
            <button type="sumbit" className="signup-btn btn">Sign Up</button>
            <button type="submit" href="/login" class="login-btn">Log In</button>
        </form>
        </div> 
    ); 
}

export default SignupForm;