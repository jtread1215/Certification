import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import { Button, ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Nav from './nav'
import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: purple[500],
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: '#11cb5f',
//     },
//   },
// });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          
          <Switch>
            <Route exact path="/">
              <img src={logo} className="App-logo" alt="logo" />
              <ButtonGroup variant="contained" color="primary">
                <Button 
                startIcon={<SaveIcon />}
                >
                  Save
                </Button>

                <Button 
                startIcon={<DeleteIcon />} 
                color="secondary">
                  Discard
                </Button>
              </ButtonGroup>
              <SignIn />
            </Route>
              
            <Route path="/nav">
              <Nav />
            </Route>
          </Switch>
        </Router>
      </header>
      {/* <Nav /> */}
  

    
    </div>

  );
}

export default App;
