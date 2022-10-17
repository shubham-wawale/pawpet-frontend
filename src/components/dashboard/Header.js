import React, {useState} from "react";
import "./Header.css"
// import web from "../images/dashboardbg.png"
import web9 from "./images/arrow.png"
import web10 from "./images/location.png"
import web11 from "./images/search.png"
import web14 from "./images/home.png"
import { withRouter } from 'react-router'

function Header(props) {

    const [search, setSearch] = useState({
        no_of_pets: "",
        location: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setSearch( prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        } );
        console.log(e.target.name,e.target.value)
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        let foundPetSitters=props.petsitters.filter( petsitter=> (petsitter.no_of_pets === search.no_of_pets && petsitter.location === search.location) )
        console.log(foundPetSitters)
        localStorage.setItem("foundPetSitters",JSON.stringify(foundPetSitters))
            props.history.push("/petsitterCards");  
    }
    return (
        <>
        <div className="imhage">
                <img src="" alt=""  />
            
            <div className="home-header">
                <div className="container center ">
                    <div className="header-text hero-reversed">
                        <h1> <strong> Get Pet Sitters for <br /> your Pets </strong> </h1>

                        <div className="container search-section d-none d-md-block">
                            <div className="row py-3 mb-4 bg-div white">
                                <div className="col-md-3">
                                    <label>I'm Looking For</label>
                                    <select id="locate" className="form-control " >

                                        {/* <option value="pet-walking" > Pet Walking </option> */}

                                        <option value="pet-sitting" > Pet Sitting </option>

                                    </select>

                                     {/* <div className="arrow">
                                        <img src={web9} alt="" />
                                    </div>  */}

                                    {/* <div className="input-img">
                                    
                                        <img className="service-image" src={web14} alt="" />
                                    </div>  */}
                                </div>

                                <div className="col-md-3">
                                    <label>Number of Pets</label>
                                    <select id="locate" name="no_of_pets" className="form-control " onChange={handleChange}>
                                        <option value="1" > 1 </option>

                                        <option value="2" > 2 </option>

                                        <option value="3" > 3 </option>

                                        <option value="4" > 4 </option>

                                    </select>
                                    
                                    <div className="arro">
                                        <img src={web9} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label>Near</label>
                                    <input type="text" className="form-control pac-target-input" name="location" id="location_search" onChange={handleChange} placeholder="Select your location" autocomplete="off" />
                                
                                    {/* <div className="loc">
                                        <img src={web10} alt="" />
                                    </div> */}

                                </div>
                                <div className="col-md-3">
                                    <label>&nbsp;</label>
                                    <button className="btn btn-primary col-md-12 serbut" type="button" onClick={handleSubmit}> Search</button>
                                
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

export default withRouter(Header);