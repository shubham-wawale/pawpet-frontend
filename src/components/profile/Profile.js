import "./Profile.css";
import * as ReactBootstrap from "react-bootstrap"
// import Navbar from "./Navbar";

function Profile() {
  return (
  <>
  
  <div className="bgimg">
  {/* <Navbar/> */}
  <div className="Info">
    <h2>Hey,I'm Rutherford</h2>
    <h3>rutherfordshane@gmail.com</h3>
    </div>
    <div className="Button">
  <ReactBootstrap.Button variant="outline-secondary" className="custom-btn">PAYOUT PREFERENCES</ReactBootstrap.Button>{' '}
  <ReactBootstrap.Button variant="outline-secondary" className="custom-btn">LOGOUT</ReactBootstrap.Button>{' '}
  <ReactBootstrap.Button variant="outline-secondary" className="custom-btn">SHOW REQUESTS</ReactBootstrap.Button>{' '}
  <ReactBootstrap.Button variant="outline-secondary" className="custom-btn">DELETE ACCOUNT</ReactBootstrap.Button>{' '}
  </div>
  </div>
  
</>

  );
}

export default Profile;