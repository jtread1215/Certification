import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../controllers/api/App';

ReactDOM.render(<App />, document.getElementById('App'));






import React, { Component } from 'react';

class Logout extends Component {
  render() {
    return (
        <div>
          <h2>Logout</h2>
        </div>
    );
  }
}

export default Logout;