import React from 'react'; 
// this needs to onchange redirect to /Upload
export function FbRestartBtn(props) {
    
    return(
        <button 
        {...props}
        className='restart' 
        type="submit">Restart
        </button>
    ); 
}; 
export default FbRestartBtn; 