import React from "react";
import web4 from "./reviews.png"
import "./Card.css"
import { withRouter } from "react-router";

const Card = (props) => {
    const handleClick=()=>{
        localStorage.setItem("selectedPetSitter",JSON.stringify(props.data))
        props.history.push({ 
            pathname: '/sitterinfo',
            state: props.data
           });
    }
    return (
        <>
                            <div className="col-md-4 col-10 mx-auto" onClick={handleClick}>
                                <div className="card haait">
                                    <img src={props.imgsrc} className="card-img-top rev" alt={props.imgsrc} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                                        <p className="card-text">{props.text}</p>
                                        <p className="rate etar">Petsitter Verified</p>
                                        <img src={web4} className="review-img starrev" alt="..." height="20px" width="100px" />
                                    </div>
                                </div>
                            </div>
                    
        </>
    );
};

export default withRouter(Card)