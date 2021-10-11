import React,{useState,useEffect} from "react";
import Card from "./Card"
import Pdata from "./Petsitter"

const PetsitterCards = () => {
    const [petsitters, setPetsitters]=useState([])
    useEffect(() => {

            const data=JSON.parse(localStorage.getItem("foundPetSitters"))
            setPetsitters(data)
            console.log(JSON.parse(localStorage.getItem("foundPetSitters")))
        
    })

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Pet Sitter Results</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                petsitters.map((val,ind) => {
                                    return <Card 
                                    data={val}
                                    key={ind}
                                        imgsrc={val.imageUrl}
                                        title={val.name}
                                        text={val.location}
                                        rate={val.charge}
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