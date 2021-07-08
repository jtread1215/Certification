import React from 'react'; 
// this needs to onchange redirect to /Upload
export function FbRestartBtn(props) {
    
    return(
        <button 
        {...props}
        className='done' 
        type="submit">I'm Done
        </button>
    ); 
}; 
export default FbRestartBtn; 