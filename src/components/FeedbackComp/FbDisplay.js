import React from "react";
import "./style.css";

export function FeedbackDisplay(props) {
  return (
    <div className="feedback-display">
      <div {...props}>{props.children}</div>
    </div>
  );
}

export default FeedbackDisplay;
