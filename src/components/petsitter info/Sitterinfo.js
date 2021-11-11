import React,{useEffect,useState} from "react"
import pro from "./pro.png"
import "./Sitterinfo.css"
import dgo from "./dog.png"
import dogman from "./dogman.png"
import placeholder from "./placeholder.png"
import petwalk from "./petwalk.png"
import car from "./car.png"
import house from "./house.png"



function Sitterinfo(props) {
    const[data,setData]=useState({
        
            name:"",
            location:"",
            charge:"",
            rating:"",
            no_of_pets:"",
            skills:[],
            desc:"",
            acc_pet_types:"",
            no_of_walks:"",
            imageUrl:""
          
    })

    const[bookingData,setBookingData]=useState({
        date:"",
        timing:"",
        no_of_pets:"",
        total_amount:""

    })

    const[todayDate,setDate]=useState("")

    const handleChange = (e) => {

        console.log(e.target);

        const{name,value}=e.target
        console.log(name, value)
        setBookingData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
        console.log(bookingData)

    }
    
    useEffect(() => {
        
            console.log(JSON.parse(localStorage.getItem("selectedPetSitter")))
            setData(JSON.parse(localStorage.getItem("selectedPetSitter")))

            var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            setDate(date)

    },[])
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="col-md-6 pt-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <img src={data.imageUrl} className="piro" alt="" />
                            <h1>{data.name}</h1>
                        </div>
                        <p>{data.location}</p>
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
                                <h5>About</h5>
                                <p>{data.desc}</p>
                                <h5>Skills and Qualifications</h5>

                                {/* <p><i className="fa fa-paw" aria-hidden="true"></i> Experience in training &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i class="fa fa-paw" aria-hidden="true"></i> Behavioral modifications</p> <br /> */}
                                {/* <p className="hexs"><i className="fa fa-paw" aria-hidden="true"></i> Able to recognise subtle signs of a problem &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i class="fa fa-paw" aria-hidden="true"></i> Skill to administer medications</p> */}
                                
                                {data.skills.map(skill=>(
                                     <p className="hexss"><i className="fa fa-paw" aria-hidden="true"></i> {skill}</p>

                                ))}
                               

                            </div>

                            <div className="sithin">
                                <h5>Summary</h5>
                                <h6>Number of pets that will be watched at one time.</h6>
                                <p>{data.no_of_pets}</p>
                                <h6>Accepted Pet Types</h6>
                                <p> <img src={dgo} className="sitdog" alt="" /> {data.acc_pet_types}</p>
                                <h6>Level of adult supervision.</h6>
                                <p> <img src={dogman} className="sitdog" alt="" /> Pets will never be left unattended</p>
                                <h6>The place your pet will be if they are left unsupervised at home.</h6>
                                <p> <img src={placeholder} className="sitdog" alt="" /> Free roam of the house</p>
                                <h6>The number of walks provided per day.</h6>
                                <p> <img src={petwalk} className="sitdog" alt="" /> {data.no_of_walks}</p>
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
                        <h6 className="card-title">From INR 250 / pet/ slot</h6>
                        <p className="card-text">Book via PawPet to enjoy Premium Insurance, 24/7 support, booking guarantee, safe cashless payments, photo updates and more!</p>
                        {/* <button className="resv"> Book Sitter </button>  */}

                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Book Sitter
                        </button>
                        {/* <button onclick="location.href='./'" type="" className="view-modal">View Modal</button> */}
                        {/* <Link to="/share">share profile</Link> */}
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Make Payment</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <input type="text" onChange={handleChange} name="date" value={todayDate} class="form-control mb-2" id="exampleFormControlInput1" placeholder="Date of booking" />
                                        <input type="text" onChange={handleChange} name="timing" class="form-control mb-2" id="exampleFormControlInput1" placeholder="Eg. 12am to 3pm" />
                                        <input type="text" onChange={handleChange} name="no_of_pets" class="form-control mb-4" id="exampleFormControlInput1" placeholder="Maximum 4" />
                                        <h6>Total Payable amount in Rs.: {bookingData.no_of_pets*250} </h6>
                                        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary"><a href='https://pmny.in/Cr5ym2ItTpml'   > Make Reservation </a> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* */}
        </>

    );
};

export default Sitterinfo;