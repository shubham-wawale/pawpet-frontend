import "./Profile.css";
import * as ReactBootstrap from "react-bootstrap"
function Profile() {
  return (
  <>
  {/* <Navbar/> */}
  <div className="Info">
    <h2>Hey,I'm User</h2>
    <h3>user@gmail.com</h3>
    </div>
    <div className="Button">
  <ReactBootstrap.Button variant="outline-secondary" className="custom-btn">PAYOUT PREFERENCES</ReactBootstrap.Button>{' '}
  <ReactBootstrap.Button variant="outline-secondary" className="custom-btn">LOGOUT</ReactBootstrap.Button>{' '}
  <ReactBootstrap.Button variant="outline-secondary" className="custom-btn">SHOW REQUESTS</ReactBootstrap.Button>{' '}
  <ReactBootstrap.Button variant="outline-secondary" className="custom-btn">DELETE ACCOUNT</ReactBootstrap.Button>{' '}
  </div>
  
</>

  );
}

export default Profile;