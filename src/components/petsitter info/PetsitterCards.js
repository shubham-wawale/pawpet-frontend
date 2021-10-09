import React from "react";
import Card from "./Card"
import Pdata from "./Petsitter"

const PetsitterCards = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Pet Sitter Reviews</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Pdata.map((val,ind) => {
                                    return <Card key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        text={val.text}
                                        rate={val.rate}
                                    />  
                            })
                        }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PetsitterCards