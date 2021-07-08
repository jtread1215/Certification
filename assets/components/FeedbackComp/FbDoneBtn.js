import React from 'react'; 
// this needs to prompt 'logout/goodbye'
function FbDoneBtn(props) {
    
    return(
        <button 
        {...props}
        className='restart' 
        type="submit">Restart{props.children}
        </button>
    ); 
}; 
export default FbDoneBtn; 