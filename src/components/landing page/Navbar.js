import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="ichon">
        <h2 className="lohgo">PawPet</h2>
      </div>
      <div className="menu">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">CONTACT</a></li>
          <button className="crtacc">Create Account</button>
        </ul>

        
      </div>
    </div>
    </>

  );

}
export default Navbar;
