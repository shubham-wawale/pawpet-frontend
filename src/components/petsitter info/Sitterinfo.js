import React from "react"
import pro from "./pro.png"
import "./Sitterinfo.css"
import dgo from "./dog.png"
import dogman from "./dogman.png"
import placeholder from "./placeholder.png"
import petwalk from "./petwalk.png"
import car from "./car.png"
import house from "./house.png"


function Sitterinfo() {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="col-md-6 pt-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <img src={pro} className="piro" alt="" />
                            <h1>Sundar</h1>
                        </div>
                        <p>Mumbai, Maharashtra</p>
                    </div>
                </div>

            </div>

            <div className="boking">
                <h5>For Pet's Sitting</h5>
                <p>Overall Rating(4.5) (11 reviews)</p>
                <h6> <i class="fa fa-calendar" aria-hidden="true" ></i> 7 Completed Bookings  <i class="fa fa-calendar" aria-hidden="true"></i> 1 Repeated Customer  <br /> <i class="fa fa-calendar" aria-hidden="true"></i> 1 Repeated Bookings</h6>

            </div>
            <hr />

            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="col-md-6 pt-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <div className="hinfo">
                                <h5>About Sundar</h5>
                                <p>A Dentist by profession but a full time animal enthusiast.A part of my personality is to serve the society and make the world a better place not just for humans but animals too. <br />
                                    I have owned and taken care of pets for the last 19 years including love birds , 2 golden retrievers , a British bull dog and toy poodle. <br />
                                    So why chose me because my love for animals makes it less of a job and more of a privilege. Also an active canine volunteer at Toronto humane society and certified animal communicator. <br />
                                    The fact that I can show my love and care through a platform makes it exciting.</p>
                                <h5>Skills and Qualifications</h5>

                                <p><i className="fa fa-paw" aria-hidden="true"></i> Experience in training &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i class="fa fa-paw" aria-hidden="true"></i> Behavioral modifications</p> <br />
                                <p className="hexs"><i className="fa fa-paw" aria-hidden="true"></i> Able to recognise subtle signs of a problem &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i class="fa fa-paw" aria-hidden="true"></i> Skill to administer medications</p>
                                <p className="hexss"><i className="fa fa-paw" aria-hidden="true"></i> Basic understanding of how to manage and care for pet</p>

                            </div>

                            <div className="sithin">
                                <h5>Summary</h5>
                                <h6>Number of pets that will be watched at one time.</h6>
                                <p>2</p>
                                <h6>Accepted Pet Types</h6>
                                <p> <img src={dgo} className="sitdog" alt="" /> Dogs</p>
                                <h6>Level of adult supervision.</h6>
                                <p> <img src={dogman} className="sitdog" alt="" /> Pets will never be left unattended</p>
                                <h6>The place your pet will be if they are left unsupervised at home.</h6>
                                <p> <img src={placeholder} className="sitdog" alt="" /> Free roam of the house</p>
                                <h6>The number of walks provided per day.</h6>
                                <p> <img src={petwalk} className="sitdog" alt="" /> 3+</p>
                                <h6>Emergency transport?</h6>
                                <p> <img src={car} className="sitdog" alt="" /> Yes</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="chhard">
                <div className="card bor" >
                    <h5>Services & Rates</h5>
                    <div className="card-body">
                    <p className="Talk"> <img src={dogman} className="sitdoghas" alt="" /> Talk and Greet</p>
                    <p className="knoe">Get to know each other first &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong>Free</strong></p>
                    <a href="#" className="btn btn-primary conthact">Contact </a>
                    <p className="tralk"> <img src={house} className="sitdoghas" alt="" /> Pet Sitting</p>
                    <h6 className="card-title">From INR 250 /night</h6>
                    <p className="card-text">Book via PawPet to enjoy Premium Insurance, 24/7 support, booking guarantee, safe cashless payments, photo updates and more!</p>
                    <button className="resv"> <a href='https://pmny.in/GIicyZretZpn'  > Make Reservation </a></button> 
                    </div>
                </div>
            </div>

           



        </>

    );
};

export default Sitterinfo;