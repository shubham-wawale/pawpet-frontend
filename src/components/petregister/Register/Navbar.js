import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <>
    <div className="navbar regnav">
      <div className="ichon">
        <h2 className="loho">PawPet</h2>
      </div>
      <div className="menus">
        <ul className="janye">
          <li><a href="/servicesTabs">Services</a></li>
          <li><a href="/registration">Sitter Jobs</a></li>
          <li><a href="/userProfile">Profile</a></li>
          <Link to="/"> <button className="crtacc">Logout</button></Link>
        </ul>

        
      </div>
    </div>
    </>

  );

}
export default Navbar;
