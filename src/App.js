import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SignUp from "./components/Signup";
import Nav from "./components/Nav";
import Org from "./components/Org";
import Upload from "./components/Upload";
import Hero from "./components/Hero";
import FeedbackComp from "./components/FeedbackComp";
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Pages from './components/Pages';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <br></br>
      <Hero />

      <Router>
        <Nav />
        <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/upload' component={Upload} />
        <Route path='/logout' component={Logout} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/feedbackPage' component={FeedbackComp} />
        <Route path='/org' component={Org} />
        <Route path='/pages' component={Pages} />
        <Route path='/wrapper' component={Wrapper} />
        </Switch>
      </Router>
      <footer>
       <Footer /> 
      </footer>
      
    </div>   
  );
}

export default App;
