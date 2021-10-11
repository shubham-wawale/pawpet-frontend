import React from "react";
import "./Review.css"
import web1 from "./images/image1.png"
import web2 from "./images/image2.png"
import web3 from "./images/image3.png"
import web4 from "./images/reviews.png"
import { Link } from 'react-router-dom';
import web40 from "./images/rightarr.png"

function Review() {
    return (
        <>

            <div className="my-4">
                <h3 className="text-center pesi">Pet Sitter reviews</h3>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card car">
                                    <img src={web1} className="card-img-top rev" alt="..." height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title">Pet Sitting</h5>
                                        <p className="card-text">Mumbai,Maharashtra</p>
                                        <p className="rate">$200/Night</p>
                                        <img src={web4} className="review-img" alt="..." height="20px" width="100px" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card car">
                                    <img src={web2} className="card-img-top rev" alt="..." height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title">Pet Walking</h5>
                                        <p className="card-text">Delhi,New Delhi</p>
                                        <p className="rate">$150/Walk</p>
                                        <img src={web4} className="review-img" alt="..." height="20px" width="100px" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card car">
                                    <img src={web3} className="card-img-top rev" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Pet Walking</h5>
                                        <p className="card-text">Mumbai,Maharashtra</p>
                                        <p className="rate">$100/Walk</p>
                                        <img src={web4} className="review-img" alt="..." height="20px" width="100px" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            {/* <div className="directre">
            <Link to="/PetsitterCards">Show All</Link> <img src={web40} alt="" height="12px" />
            </div> */}

            

        </>
    );
}
export default Review;