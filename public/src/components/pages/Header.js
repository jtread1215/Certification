import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header () {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
  
    const handleLogout = e => {
      dispatch(logOut())
    }
  
    return (
      <div className="header">
        <NavLink to ="/main">Home</NavLink>
        <NavLink to ="/maunual">Manual</NavLink> 
        <NavLink to ="/upload">Upload</NavLink>
        {
          currentUser.username ?
            <>
              <NavLink to="/profile">Profile</NavLink>
              <button onClick={handleLogout} className="logout"> Log Out </button>
            </> : 
            <NavLink to ="/sign-up">Sign Up</NavLink>
        }
      </div>
    )
  }