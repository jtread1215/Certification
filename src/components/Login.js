import React from 'react';

const Login = () => {
    return (
        <div className="loginApp">
            <h2>This is Login</h2>
            <form>
                <label>Username: </label>
                <input type="text" id="userName"></input>
                <br/>
                <br/>
                <label>Password: </label>
                <input type="text" id="userPassword"></input>
                <br/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )}

export default Login;