import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="ichon">
        <h2 className="loho">PawPet</h2>
      </div>
      <div className="menu">
        <ul className="janye">
          <li><a href="#">Services</a></li>
          <li><a href="#">Sitter Jobs</a></li>
          <li><a href="#">Profile</a></li>
          <Link to="/"> <button className="crtacc">Logout</button></Link>
        </ul>

        
      </div>
    </div>
    </>

  );

}
export default Navbar;
