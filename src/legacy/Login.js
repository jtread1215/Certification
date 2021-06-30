import React from 'react';

const Login = () => {
    return (
        <div className="loginApp">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="username" id="userName"></input>
                <br/>
                <br/>
                <input type="text" placeholder="password" id="userPassword"></input>
                <br/>
                <br/>
                <button>Login</button>
                <br/>
                <br/>
                <button>Sign up</button>
            </form>
        </div>
    )}

export default Login;