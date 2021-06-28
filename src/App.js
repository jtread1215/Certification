import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
    return (
      <Router>
        <div>
          <NavTabs/>
          <Route exact path="/" component={Signup} />
          <Route exact path="/Main" component={Main} />
          <Route path="/Logout" component={Logout} />
        </div>
      </Router>
    );
  }
  
  export default App;
