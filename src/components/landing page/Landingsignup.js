import React from 'react';
import './signup.css';
import './landing.css';
import Navbar from "./Navbar";
import Signup from './Signup';

function Landingsignup(props) {
  function addUser(data){
    props.adduser(data)
  }

  return (
    <div className="backhimg">
    <>
      <Navbar />
      <Signup onadd={addUser} />
      
    </>
    </div>

  );
};

export default Landingsignup;
