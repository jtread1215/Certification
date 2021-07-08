import React from "react";
import "../Logout/style.css";

const Logout = (props) => {
  // const [change, setChange] = setState();
  return (
    <button {...props} type="submit" className="logout-btn btn">
      Log Out{props.children}
    </button>
  );
};
export default Logout;
