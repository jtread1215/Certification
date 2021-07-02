import React from 'react'; 

function Org(){
    return(
    <div id="org-name-wrapper">
        
            <form id="org-name-form">
                <div>
                    <label for="org-name-input">What is the name of your organization?</label>
                    <input type="text" id="org-name-input" />
                </div>
            </form>
    </div>
    );
}

export default Org; 