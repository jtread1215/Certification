import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SignUp from "./components/Signup";
import Org from "./components/Org";
import Upload from "./components/Upload";
import Hero from "./components/Hero";
import FeedbackComp from "./components/FeedbackComp/index";
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Pages from './components/Pages';
import Nav from './components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import './components/FeedbackComp/style.css'; 
// import FbDoneBtn from "./components/FeedbackComp/FbDoneBtn";
// import FbRestart from './components/FeedbackComp/FbRestartBtn';
// import FbDisplay from './components/FeedbackComp/FbDisplay'; 

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
