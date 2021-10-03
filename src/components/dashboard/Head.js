import React from 'react';
import './Head.css';
import web5 from "./images/info.png"
import web15 from "./images/one.png"
import web16 from "./images/two.png"
import web17 from "./images/three.png"
import web18 from "./images/dot.jpg"
import web19 from "./images/cat1.png"
import web20 from "./images/dog1.png"
import web21 from "./images/cute.png"
import web22 from "./images/catdog.png"



function Head() {
    return (
        <>

            <div className="my-4">
                <p className="text-center offer">Offer services in 3 Steps</p>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card blank">

                                    <img src={web15} className="card-img-top rev one" alt="..." height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title space">List your services for free</h5>
                                        <p className="card-text my-3">Zero sign up charges to provide pet care services from your home such as Pet Boarding, Pet Grooming, Pet Daycare or go to a pet parent's place for Pet Sitting, Pet Taxi and Dog walking.</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card blank">
                                    <img src={web16} className="card-img-top rev one" alt="..." height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title spaces">Decide how you want to work</h5>
                                        <p className="card-text my-3">Choose your own schedule, prices, and requirements for your services. We’re there to help along the way.</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card blank">
                                    <img src={web17} className="card-img-top rev one" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title spacess">Welcome your first pet</h5>
                                        <p className="card-text my-3">Once your listing is live, you can start accepting jobs. You can message pet parents with any questions before a job starts along with easy payments via PetBacker.</p>

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
                                    <p className="card-text inc"> <img src={web18} className="point" alt="" /> Freedom to choose your schedule, services, and quote. <br />
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
                                        <img src={web18} className="point" alt="" /> <strong>Marketing:</strong>  Through our multiple online marketing channels, we make it easy for nearby pet parents to find pet sitting, grooming, walking or taxi services. <br />
                                        <img src={web18} className="point" alt="" />  <strong> Support: </strong> Attentive and responsive customer support services. <br />
                                        <img src={web18} className="point" alt="" />  <strong> Training & Blog:</strong> We provide training and certification. Get started with basic knowledge for your first pet sitting job with this article.</p>

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
                                    <p className="card-text inc"> <img src={web18} className="point" alt="" /> To personally deliver the services you have promised in a friendly and professional <br />
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
                                        <img src={web18} className="point" alt="" /> Please read our FAQ and Terms of Use for details of what being a Backer with us requires and what you can expect of PawPet.</p>

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
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h2> How to apply? – a pet sitter, a dog walker, <br /> a adopter – Apply now with <br /> <strong>PawPet App!</strong> </h2>
                                    <p className="para">See price estimates and read reviews with pet sitters, pet adopter, dog walkers,<br /> and see how far your dog has walked all in the Pet app.</p>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web5} className="img-fluid" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

            <div className="reg">
                <div class="mb-3">
                    <h6><label for="exampleFormControlInput1" class="form-label">Full name*</label></h6>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                </div>

                <div class="mb-3">
                    <h6><label for="exampleFormControlInput1" class="form-label">Email*</label></h6>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" />
                </div>

                <div class="mb-3">
                    <h6><label for="exampleFormControlInput1" class="form-label">Mobile Number*</label></h6>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Mobile Number" />
                </div>

                <div class="mb-3">
                    <h6><label for="exampleFormControlTextarea1" class="form-label">Address*</label></h6>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <h6><label for="exampleFormControlTextarea1" class="form-label">Days Available*</label></h6>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Sunday
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Monday
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Tuesday
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Wednesday
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Thursday
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Friday
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Saturday
                    </label>
                </div>

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
                <div class="form-check">
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
                </div>

                <div class="mb-3">
                    <h6><label for="exampleFormControlTextarea1" class="form-label">Why do you want to be a pet sitter?*</label></h6>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                
            </div>


        </>

    );
};

export default Head;