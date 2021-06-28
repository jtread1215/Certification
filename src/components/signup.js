import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
        <div>
          <h2>Login or Sign up.</h2>
          <form onSubmit={handleSubmit}>
        <label>
          Username
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button type="submit" className="primary">
              Sign Up
            </button>
          </div>
        </label>
      </form>
        </div>
    );
  }
}

export default Signup;