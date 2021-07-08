import React from 'react';
import '../Org/style.css'; 

function Org(props){
    return(
        <div id='org-name-wrapper'>
            <form id="org-name-form" className='org-name-form'>
                <div>
                    <label htmlFor="org-name-input">What is the name of your Organization?</label>
                    <input type="text"
                    id="org-name-input"
                    className="org-name-input"></input>
                </div>
            </form>
        </div>
    ); 
}

export default Org; 