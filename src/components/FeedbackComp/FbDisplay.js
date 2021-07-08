import React from "react";
import "./style.css";

export function FeedbackDisplay(props) {
  return (
    <div className="feedback-display">
      <div {...props}>{props.children}Writing Words in here to see it shows upload</div>
    </div>
  );
}

export default FeedbackDisplay;
