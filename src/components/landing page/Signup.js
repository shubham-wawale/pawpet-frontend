import React, { useState } from "react";
import "./signup.css"
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

function Signup(props) {
    const [signup, setSignup] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setSignup(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });

    }

    function handleSubmit(e) {
        // console.log(signup)
        e.preventDefault();
        props.onadd(signup)
        alert("User added successfully")
        props.history.push("/");
    }
    return (
        <>
        <div className="main">
            <div className="content">
                <h1>PawPet</h1>
                <p className="par">If You're a Pet Lover, You've Come to the Right Place <br />
                Pup, Pup, Hooray! You Leave Em, We Love Em. <br />
                Join our growing community and find one today.</p>
                <Link to="/"><button className="cn">Get Started</button></Link>
            </div>
           
            <form className="signup_form">
            <div className="foram">
                <h2>Sign-up Here</h2>
                <input type="email" name="email" required="required" placeholder="Enter your Email" onChange={handleChange} />
                <input type="password" name="password" required="required" placeholder="Enter your Password " onChange={handleChange} />
                <button className="bhutton" onClick={handleSubmit}>Sign-up</button>
                <p className="lenk">Already have an account? <br />
                <Link to="/">Sign-in</Link> here</p>
                <p className="liw">Sign-up with</p>

                {/* <form className="signup_form">
                    <div className="foram">
                        <h2>Sign-up Here</h2>
                        <input type="email" name="email" placeholder="Enter your Email" onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Enter your Password " onChange={handleChange} required />
                        <button className="bhutton" onClick={handleSubmit}>Sign-up</button>
                        <p className="lenk">Already have an account? <br />
                            <Link to="/">Sign-in</Link> here</p>
                        <p className="liw">Sign-up with</p> */}

                        <div className="icon">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" class="fa fa-facebook"></a>
                            <a href="https://twitter.com/" class="fa fa-twitter"></a>
                            <a href="https://accounts.google.com/AccountChooser/identifier?flowName=GlifWebSignIn&flowEntry=AccountChooser" class="fa fa-google"></a>
                            <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                            <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
                        </div>
                    </div>
                </form>

            </div>

        </>

    );
}

export default withRouter(Signup);