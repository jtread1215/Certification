import React from "react";

function DateComp(props) {
  return (
    <div id="date-container-manual">
      <p>Enter the date you want displayed on the certificate:</p>

      <label htmlFor="day-manual">on this Day</label>
      <span>
        <input type="text" id="day-manual" {...props}></input>
      </span>

      <label htmlFor="year-manual">of the Year</label>
      <span>
        <input type="text" id="year-manaul"{...props}></input>
      </span>
    </div>
  );
}; 
export default DateComp; 
