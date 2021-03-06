import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textBox: {
    backgroundColor: 'white',
    borderRadius: '5px'
  }
}));

function SignupForm() {
    const classes = useStyles();
    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField 
              className={classes.textBox}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="Username"
              autoComplete="current-username"
              autoFocus
            />
            <TextField
              className={classes.textBox}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Link href="/upload"><Button
              
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign UP
            </Button></Link>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        
      </Container>
    );
}

export default SignupForm; 