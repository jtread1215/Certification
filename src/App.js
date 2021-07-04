import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Manual from "./components/Manual";
import SignUp from "./components/Signup";
import Nav from "./components/Nav";
import Org from "./components/Org";
import Upload from "./components/Upload";
import Hero from "./components/Hero";
import FeedbackComp from "./components/FeedbackComp";
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Pages from './components/Pages';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <br></br>
      <h1>I Was There!</h1>
     
      <Router>
      
        <Route exact path= '/'>
          <Login />
        </Route>

        <Route path= '/upload'>
          <Upload />
        </Route>

        <Route path= '/nav'>
          <Nav />
        </Route>

        

      
        < Route path= '/logout'>
          <Logout />
        </Route>

      
        <Route path= '/sign-up'>
          <SignUp />
        </Route>

      
        <Route path= '/manual'>
          <Manual />
        </Route>

      
        <Route path= '/feedbackPage'>
          <FeedbackComp />
        </Route>

      
        <Route path= '/org'>
          <Org />
        </Route>

      
        <Route path= '/hero'>
          <Hero />
        </Route>

        <Route path= '/pages'>
          <Pages />
        </Route>

        < Route path= '/wrapper'>
          <Wrapper />
        </Route>

      </Router>
      <footer>
       <Footer /> 
      </footer>
      
    </div>   
  );
}

export default App;
