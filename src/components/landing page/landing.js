import React from 'react';
import './login.css';
import './landing.css';
import Navbar from "./Navbar";
import Login from "./login";

function Landing(props) {
  return (
    <div className="backhimg">
    <>
      <Navbar />
      <Login users={props.users}/>
      
    </>
    </div>

  );
};

export default Landing;
