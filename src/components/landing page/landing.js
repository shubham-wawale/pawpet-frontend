import React,{useState} from 'react';
import './login.css';
import './landing.css';
import Navbar from "./Navbar";
import Login from "./login";
import { Toast } from "bootstrap";

function Landing(props) {

  // const [showSucc, setShowSucc] = useState(false);
  // function handleToastSucc(value){
  //   setShowSucc(value)
  // }

  // const [showErr, setShowErr] = useState(false);
  // function handleToastErr(value){
  //   setShowErr(value)
  // }

  return (
    <div className="backhimg">

      {/* <Toast onClose={() => setShowSucc(false)} show={showSucc} delay={3000} autohide>
        <Toast.Header> <h3>Success</h3>
        </Toast.Header>
        <Toast.Body>Woohoo, Logged in Successfully</Toast.Body>
      </Toast>

      <Toast onClose={() => setShowErr(false)} show={showErr} delay={3000} autohide>
        <Toast.Header> <h3>Error!</h3>

        </Toast.Header>
        <Toast.Body>Oops, invalid credentials</Toast.Body>
      </Toast> */}
      <>
        <Navbar />
        <Login users={props.users}  />
        {/* success={handleToastSucc} error={handleToastErr} */}
      </>
    </div>

  );
};

export default Landing;
