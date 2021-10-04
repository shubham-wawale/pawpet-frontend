import React from "react";
import web6 from "./images/match.png"
import web7 from "./images/confirm.png"
import web8 from "./images/request.png"
import web12 from "./images/tick.png"
import './Remain.css'

function Remain() {
    return (
        <>

            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="col-md-6 pt-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h2> Get pet sitters or pet adopters .</h2>
                            <p className="para">We match your pets and their needs to trusted local pet sitter, pet stores and services in India instantly.</p>
                        </div>


                    </div>
                </div>

            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={web8} className="card-image-top request" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title place">Make a Request</h5>
                                        <pre>
                                            <p className="card-text design">Answer a few quick questions  <br /> about the pet service you <br />           want.</p>
                                        </pre>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={web6} className="card-image-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title match">Match with Sitters</h5>
                                        <pre>
                                            <p className="card-text handle">    See the estimates <br /> provided by pet sitters <br />       in profile.</p>
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={web7} className="card-image-top confirm" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title place">Confirm the Sitter</h5>
                                        <pre>
                                            <p className="card-text design"> Proceed with the Pet Sitter if <br /> suitable otherwise inform us <br />         to meet other.</p>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h5 className="head"> <strong> Why PawPet? </strong></h5>
                        </div>


                    </div>
                </div>

            </div>
            <div className="container-fluid mb-5 adj">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Great For your Pet</h5>
                                        <p className="card-text"> <img src={web12} className="tick" alt="..." /> Get a pet lover to care, not a cage <br />
                                        <img src={web12} className="tick" alt="..." /> Personal care and attention <br />
                                        <img src={web12} className="tick" alt="..." />    Stay in a home near yours <br />
                                        <img src={web12} className="tick" alt="..." />   Stay in familiar surroundings and items</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"> Great For You</h5>
                                        <p className="card-text"> <img src={web12} className="tick" alt="..." /> Simple reservation online <br />
                                        <img src={web12} className="tick" alt="..." />   Daily updates with photos and chats <br />
                                        <img src={web12} className="tick" alt="..." />   Customer service always there for you <br />
                                        <img src={web12} className="tick" alt="..." />   Payment protection</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Trust And Safety</h5>

                                        <p className="card-text"> <img src={web12} className="tick" alt="..." /> Profiles that have been reviewed <br />
                                        <img src={web12} className="tick" alt="..." />  Previous jobs' reviews and ratings <br />
                                        <img src={web12} className="tick" alt="..." />   Your pet is insured <br />
                                        <img src={web12} className="tick" alt="..." />   A community of pet lovers</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>

    );
};

export default Remain;