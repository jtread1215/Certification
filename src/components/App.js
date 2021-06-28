import React, { Component } from React;


function App() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/logout'} className="nav-link">Logout</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/upload">
              <Uplaod />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <h2>Home</h2>
  }
  
  function Upload() {
    return <h2>Upload</h2>
  }
  
  function Logout() {
    return <h2>Logeout</h2>
  }