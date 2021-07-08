import React from "react";

function Select(props) {

  return (
    <div>
      <label htmlFor="certificate-type-manual">Certificate of</label>
      <select defaultValue="Attendance" {...props}>
        <option value="Attendance">Attendance</option>
        <option value="Achievement">Achievement</option>
        <option value="Completion">Completion</option>
        <option value="Excellence">Option</option>
      </select>
    </div>
  );
}; 
export default Select; 
