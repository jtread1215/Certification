import React from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Manual from "../components/Manual";
import SignUp from "../components/SignUp";
import Nav from "../components/Nav";
import Org from "../components/Org";
import Upload from "../components/Upload";
import Hero from "../components/Hero";
import FeedbackComp from "../components/FeedbackComp";
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Pages from './components/Pages';

import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
          
            <Route path= '/upload'>
            <Upload />
          
          </Route>

          
              <Route path= '/nav'>
            <Nav />
          
          </Route>

          
              <Route path= '/login'>
            <Login />
          
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

         
            <Route path= '/footer'>
              <Footer />
          
          </Route>
    </Router>
    </div>   
  );
}

export default App;
