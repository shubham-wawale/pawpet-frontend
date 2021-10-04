import React from "react";
import "./Header.css"
// import web from "../images/dashboardbg.png"
import web9 from "./images/arrow.png"
import web10 from "./images/location.png"
import web11 from "./images/search.png"
import web14 from "./images/home.png"

function Header() {
    return (
        <>
        <div className="imhage">
                <img src="" alt="" height="750px" width="1688px" />
            
            <div className="home-header">
                <div className="container center">
                    <div className="header-text hero-reversed">
                        <h1> <strong> Get Pet Sitters for<br />Cat &amp; Dog Boarding in India</strong> </h1>

                        <div className="container search-section d-none d-md-block">
                            <div className="row py-3 mb-4 bg-div white">
                                <div className="col-md-3">
                                    <label>I'm Looking For</label>
                                    <select id="locate" className="form-control " >
                                        <option value="Pet-sitters" > Select Service </option>

                                        <option value="pet-adoption" > Pet Adoption </option>

                                        <option value="pet-walking" > Pet Walking </option>

                                        <option value="pet-sitting" > Pet Sitting </option>

                                    </select>

                                     <div className="arrow">
                                        <img src={web9} alt="" />
                                    </div> 

                                    {/* <div className="input-img">
                                    
                                        <img className="service-image" src={web14} alt="" />
                                    </div>  */}
                                </div>

                                <div className="col-md-3">
                                    <label>Number of Pets</label>
                                    <select id="locate" className="form-control " >
                                        <option value="Pet-sitters" > 1 </option>

                                        <option value="pet-adoption" > 2 </option>

                                        <option value="pet-walking" > 3 </option>

                                        <option value="pet-sitting" > 4 </option>

                                    </select>
                                    
                                    <div className="arro">
                                        <img src={web9} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label>Near</label>
                                    <input type="text" className="form-control pac-target-input" id="location_search" placeholder="Select your location" autocomplete="off" />
                                
                                    {/* <div className="loc">
                                        <img src={web10} alt="" />
                                    </div> */}

                                </div>
                                <div className="col-md-3">
                                    <label>&nbsp;</label>
                                    <button className="btn btn-primary col-md-12 serbut" type="button" > Search</button>
                                
                                    <div className="search">
                                        <img src={web11} alt="" />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            </div> 



             
            

        </>

    );
}

export default Header;