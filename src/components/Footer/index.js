import React from "react"; 
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <span color="inherit">
        I Was There!
      </span>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
    return(
        <footer className="footer">
          <Box mt={8}>
            <Copyright />
          </Box>
        </footer>
    ); 
}
export default Footer; 