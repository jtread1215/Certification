import React from 'react'; 
// this needs to onchange redirect to /Upload
function FbRestartBtn(props) {
    
    return(
        <button 
        {...props}
        classNane='done' 
        type="submit">I'm Done{props.children}
        </button>
    ); 
}; 
export default FbRestartBtn; 