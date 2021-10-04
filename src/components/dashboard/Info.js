import React from "react";
import web5 from "./images/info.png"
import './Info.css'


function Info() {
  return (
    <>

      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2> When you need to hire someone – a pet sitter, <br /> a adopter, anyone – <strong>PawPet</strong> <br /> finds them for you for free.</h2>
                  <p className="para">See price estimates and read reviews about pet sitters or pet adopter, </p>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web5} className="img-fluid" alt="" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </>

  );
};

export default Info;