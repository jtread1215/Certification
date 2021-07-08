import React from 'react'; 
import '../Signup/style.css'; 

function Signup(props) {
    return(
        <div id="signup-wrapper">
            <div id="header-signup">
                <h2>Sign Up</h2>
            </div>
            <form id="signup-form">
                <div>
                    <label htmlFor="firstname-input-signup">First Name</label>
                    <input 
                    type="text" 
                    id="firstname-input-signup" 
                    className="firstname-input-signup">

                </input>
                </div>
                <div>
                    <label hmlFor="lastname-input-signup">Last Name</label>
                    <input type="text"
                    id="lastname-input-signup"
                    className="lastname-input-signup">

                    </input>
                </div>

                <div>
                    <label htmlFor="password-input-signup">Password</label>
                    <input type="text"
                    id="password-input-signup"
                    className="password-input-signup"></input>
                </div>
                <button type="submit"
                className="signup-btn btn">
                    Sign Up
                </button>

                <button type="submit"
                className="Login-btn btn">
                    Log In
                </button>

            </form>
        </div>
        ); 
}

export default Signup; 