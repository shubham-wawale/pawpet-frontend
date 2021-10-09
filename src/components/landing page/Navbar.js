import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="ichon">
        <h2 className="lohgo">PawPet</h2>
      </div>
      <div className="menu">
        <ul className="janiye">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">CONTACT</a></li>
          <Link to="/Signup"> <button className="crtacc">Create Account</button></Link>
        </ul>

        
      </div>
    </div>
    </>

  );

}
export default Navbar;
