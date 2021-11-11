import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap'
import './Reg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from "axios";


// import coff from "../Images/twocat.jpg";
import web5 from "../Images/info.png";
import web15 from "../Images/one.png"
import web16 from "../Images/two.png"
import web17 from "../Images/three.png"
import web18 from "../Images/dot.jpg";
import web19 from "../Images/cat1.png";
import web20 from "../Images/dog1.png";
import web21 from "../Images/cute.png";
import web22 from "../Images/catdog.png";
import { withRouter } from 'react-router';



function Reg(props) {
    const[data,setData]=useState({
        name:"",
        aadhar_number:"",
        email:"",
        ph_no:"",
        address:"",
        no_of_pets: 0,
        description: ""
    })

    const [time, setTime]=useState({
        timing_from:"",
        timing_to:""
    })

    const[isRegistered,setIsRegistered]=useState(false)

    var days_available = [];

    const handleChange = (e) => {

        console.log(e.target);

        const{name,value}=e.target
        console.log(name, value)
        setData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
        console.log(data)

    }

    const handleTime = (e)=> {
        const{name,value}= e.target
        console.log(name, value)
        setTime(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }



    const handleDays = (e)=> {
        let isChecked = e.target.checked;
        if(isChecked) {
            days_available.push(e.target.value);
        } else {
            const index = days_available.indexOf(e.target.value);
            days_available.splice(index, 1)
        }
        console.log(days_available)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("/registerSitter", {
           ...data,
           ...time,
           days_available
        }).then((res)=> {
            setIsRegistered(res.data.isRegistered)
            console.log(res)
        }).catch(err=> {
            console.log(err)
        })
        if(isRegistered) {
            alert("Successfully Submitted")
        props.history.push("/sitterprofile");
        } else {
        props.history.push("/registration");

        }
    }

    return (
        <>

            {/* <div>
                <Container>
                    <figure className="positon-relative">
                        <img src={coff} className="img-fluid" alt="" />
                        <figcaption>
                            pet sitting platform.
                        </figcaption>

                    </figure>

                </Container>
            </div> */}

            <div className="my-4">
                <p className="text-center offer">Offer services in 3 Steps</p>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="blank">

                                    <img src={web15} className="one" alt="..." height="70px" />
                                    <div className="card-body">
                                        <h5 className="card-title space">List your services for free</h5>
                                        <p className="card-text my-3">Zero sign up charges to provide pet care services from your home such as Pet sitting .</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="blank">
                                    <img src={web16} className="one" alt="..." height="70px" />
                                    <div className="card-body">
                                        <h5 className="card-title spaces">Decide how you want to &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    work</h5>
                                        <p className="card-text my-3">Choose your own schedule, prices, and requirements for your services. We’re there to help along the way.</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="blank">
                                    <img src={web17} className=" one" alt="..." height="70px" />
                                    <div className="card-body">
                                        <h5 className="card-title spacess">Welcome your first pet</h5>
                                        <p className="card-text my-3">Once your listing is live, you can start accepting jobs. You can message pet parents with any questions before a job starts along with easy payments via PawPet.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>






            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="col-md-9 col-10 mx-2 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Advantage of being PawPet's sitter...</h5>
                                    <p className="card-text inc"> <img src={web18} className="point" alt="" /> Freedom to choose your schedule and services. <br />
                                        <img src={web18} className="point" alt="" />  Your service will be allocated to near by pet parents. <br />
                                        <img src={web18} className="point" alt="" />  We will help you manage & handle pet parent’s booking and request. <br />
                                        <img src={web18} className="point" alt="" />  Simple and reliable payment system.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 col-10 shift mt-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">In return, PawPet provides:</h5>
                                    <p className="card-text inc"> <img src={web18} className="point" alt="" /> <strong> Easy admin: </strong> We promptly handle all customer payments to you through our credit card processing system. <br />
                                        <img src={web18} className="point" alt="" /> <strong>Marketing:</strong>  Through our multiple online marketing channels, we make it easy for nearby pet parents to find pet sitting, pet adoption and veterinary and other services. <br />
                                        <img src={web18} className="point" alt="" />  <strong> Support: </strong> Attentive and responsive customer support services. <br />
                                        <img src={web18} className="point" alt="" />  <strong> Blog:</strong>  Get started with basic knowledge for your first pet sitting job with this article.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 col-10 mx-2 mt-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">We Encourage Pet Sitter.</h5>
                                    <p className="card-text inc"> <img src={web18} className="point" alt="" /> To provide a “Cage Free” pet service. <br />
                                        <img src={web18} className="point" alt="" />  Upload as many photos as possible reflecting your dedication and enthusiasm for the care of the pets you sit. <br />
                                        <img src={web18} className="point" alt="" />  Add a brief bio describing yourself demonstrating your ability,skill or knowledge to the care of animals. <br />
                                        <img src={web18} className="point" alt="" />  Regularly updated your personal information.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 col-10 shift mt-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Once you partnered as Sitter , your have to:</h5>
                                    <p className="card-text inc"> <img src={web18} className="point" alt="" /> To personally deliver the services you have promised in a friendly and professional way. <br />
                                        <img src={web18} className="point" alt="" />  To respond quickly (within 24 hours) and professionally to customer inquiries and booking requests. <br />
                                        <img src={web18} className="point" alt="" />  To keep your availability and account up to date. <br />
                                        <img src={web18} className="point" alt="" />  Confirm that you are legally able to provide Pet Service in your jurisdiction.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 col-10 mx-2 mt-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">It is also important to know</h5>
                                    <p className="card-text inc"> <img src={web18} className="point" alt="" /> PawPet does not charge any upfront or ongoing fees - only a set percentage from the amount quoted will be charged after you win and complete the request. <br />
                                        <img src={web18} className="point" alt="" />  To apply, you must read and agree to our terms and conditions. <br />
                                        <img src={web18} className="point" alt="" />  To process your application, we need your proper contact information such as Email, WhatsApp, Line, Wechat, Facebook etc. <br />
                                        <img src={web18} className="point" alt="" />   Your privacy is important to us, all of your information will be only use for PawPet business and will not be rented, sold or otherwise distributed. See our Privacy Policy. <br />
                                        <img src={web18} className="point" alt="" /> Please read our FAQ and Terms of Use for details of what being a sitter with us requires and what you can expect of PawPet.</p>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <img src={web19} className="wut" alt="" />
            <img src={web20} className="wat" alt="" />
            <img src={web21} className="wet" alt="" />
            <img src={web22} className="wot" alt="" />

            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h2> How to apply? – a pet sitter -a adopter <br /> – Apply now with <br /> <strong>PawPet!</strong> </h2>
                                    <p className="para">Want to be a certified pet sitter???<br /> Scroll down and answer few questions. </p>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web5} className="img-fluid" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </section>

            <form className="reg_form">
                <div className="reg">
                    <h2>Pet Sitter Application</h2>
                    <p>We’re looking forward to hearing your responses to our questions about pet care!</p>
                    <div class="mb-3">
                        <h6><label for="exampleFormControlInput1" class="form-label" >Full name (As per Aadhar card)*</label></h6>
                        <input type="text" name="name" class="form-control" onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter your name" />
                    </div>

                    <div class="mb-3">
                        <h6><label for="exampleFormControlInput1" class="form-label">Email (As per Aadhar card)*</label></h6>
                        <input type="text" name="email" class="form-control" onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter your Email" />
                    </div>

                    <div class="mb-3">
                        <h6><label for="exampleFormControlInput1" class="form-label">Aadhar card Number*</label></h6>
                        <input type="text" name="aadhar_number" onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="Enter your aadhar number" />
                    </div>

                    <div class="mb-3">
                        <h6><label for="exampleFormControlInput1" class="form-label">Mobile Number (As per Aadhar card)*</label></h6>
                        <input type="text" name="ph_no" class="form-control" onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter your Mobile Number" />
                    </div>

                    <div class="mb-3">
                        <h6><label for="exampleFormControlTextarea1" onChange={handleChange} class="form-label">Address (As per Aadhar card)*</label></h6>
                        <textarea name="address" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <h6><label for="exampleFormControlTextarea1" class="form-label">Days Available*</label></h6>
                    <div class="form-check">
                        <input class="form-check-input" onChange={handleDays} type="checkbox" value="sunday" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Sunday
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" onChange={handleDays} type="checkbox" value="monday" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Monday
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" onChange={handleDays} type="checkbox" value="tuesday" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Tuesday
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" onChange={handleDays} type="checkbox" value="wednesday" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Wednesday
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" onChange={handleDays} type="checkbox" value="thursday" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Thursday
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" onChange={handleDays} type="checkbox" value="friday" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Friday
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input " onChange={handleDays} type="checkbox" value="saturday" id="flexCheckDefault" />
                        <label class="form-check-label mb-3" for="flexCheckDefault">
                            Saturday
                        </label>
                    </div>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <h6>Time Available:</h6>
                        <Form.Label column sm="1">
                            <h6>From</h6>
                        </Form.Label>
                        <Col sm="1">
                            <Form.Control name="timing_from" onChange={handleTime} className="from" type="time" />
                        </Col>
                        <Form.Label column sm="1">
                            <h6 className="uss">To</h6>
                        </Form.Label>
                        <Col sm="1">
                            <Form.Control name="timing_to" onChange={handleTime} className="to" type="time" />
                        </Col>
                    </Form.Group>

                    <h6><label for="exampleFormControlTextarea1" class="form-label">Are you 18 years or older?*</label></h6>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div>

                    <h6><label for="exampleFormControlTextarea1" class="form-label">Can you stay at client's home overnight?*</label></h6>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div>

                    <h6><label for="exampleFormControlTextarea1" class="form-label">Which pets are you willing to take care of?*</label></h6>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Dogs
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Cats
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Birds
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Fish
                        </label>
                    </div>

                    <h6><label for="exampleFormControlTextarea1" class="form-label">Number of pets you can take care of:*</label></h6>
                    {/* <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            1
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            2
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            3
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            4
                        </label>
                    </div> */}

                    <select onChange={handleChange} name="no_of_pets" id="pets_sit">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select> 
                    <br />
                    <br />


                    <div class="mb-3">
                        <h6><label for="exampleFormControlTextarea1" class="form-label">Why do you want to be a pet sitter?*</label></h6>
                        <textarea class="form-control" name="description" onChange={handleChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>


                    <button type="button" class="btn btn-primary mb-3" onClick={handleSubmit}>
                        Submit
                    </button>

                    
                </div>
            </form>


        </>

    );
};

export default withRouter(Reg) ;