import React, { useState } from "react";
import "./login.css"
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { Toast } from "bootstrap";
import axios from "axios";

function Login(props) {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });


    function handleChange(e) {
        const { name, value } = e.target;
        setLogin(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("/login", {
            email: login.email,
            password: login.password
        }).then((res)=> {
            console.log(res)
        }).catch(err=> {
            console.log(err)
        })
        // let founduser = props.users.find(user => user.email === login.email)

        // if (founduser) {
        //     console.log(founduser)
        //     // props.success(true)
        //         alert("Successfully logged in")
        //         props.history.push("/dashboard");
                
            
        // }
        // else {
        //     // props.error(true)
        //     alert("Invalid Credentials")
        //     console.log("usernotfound")
            
        // }

        // console.log(localStorage.getItem("normal_users"));    
    }

    return (
        <>
        
            <div className="main">
            
                <div className="content">
                    <h1>PawPet</h1>
                    <p className="par">If You're a Pet Lover, You've Come to the Right Place <br />
                        Pup, Pup, Hooray! You Leave Em, We Love Em. <br />
                        Join our growing community and find one today.</p>
                    <Link to="/Signup"><button className="cn">Get Started</button></Link>

                    
                </div>

                <form className="login_form">
                    <div className="foram">
                        <h2>Login Here</h2>
                        <input type="email" name="email" placeholder="Enter your Email" required onChange={handleChange} />

                        <input type="Password" name="password" placeholder="Enter your Password" required onChange={handleChange}  />

                        <button className="bhutton" type="submit" onClick={handleSubmit}>Login</button>
                        <p className="lenk">Don't have an account? <br />
                            <Link to="/Signup">Sign-up</Link> here</p>
                        <p className="liw">Log in with</p>

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

export default withRouter(Login);