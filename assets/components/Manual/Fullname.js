import React from "react";

function FullName(props) {
  return (
    <div>
      <label htmlFor="reg-firstname-input-manual">First Name</label>
      <input type="text" id="reg-firstname-input-manual" {...props}></input>

      <label htmlFor="reg-lastname-input-manual">Last Name</label>
      <input type="text" id="reg-firstname-input-manual" {...props}></input>
    </div>
  );
}; 
export default FullName; 
