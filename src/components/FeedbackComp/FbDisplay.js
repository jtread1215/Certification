import React from "react";
import "./style.css";

export function FeedbackDisplay(props) {
  return (
    <div className="feedback-display">
      <div {...props}>{props.children}Writing Words in here to see it shows feedback during design. It needs more text so that I can test to see if the columns will wrap</div>
    </div>
  );
}

export default FeedbackDisplay;
