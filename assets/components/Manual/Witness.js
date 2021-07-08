import React from "react";

function Witness(props) {
  return (
    <div id="witness-container-manual">
      <p>Witnessed by</p>
      <label htmlFor="witness-firstname-manual">First Name</label>
      <input type="text" id="witness-firstname-manual" {...props}></input>

      <label htmlFor="witness-lastname-manual">Last Name</label>
      <input type="text" id="witness-lastname-manual"{...props}></input>
    </div>
  );
}; 
export default Witness; 
