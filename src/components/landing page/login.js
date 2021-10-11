import React, { useState } from "react";
import "./login.css"
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { Toast } from "bootstrap";

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
        let founduser = props.users.find(user => user.email === login.email)

        if (founduser) {
            console.log(founduser)
            // props.success(true)
                alert("Successfully logged in")
                props.history.push("/dashboard");
                
            
        }
        else {
            // props.error(true)
            alert("Invalid Credentials")
            console.log("usernotfound")
            
        }

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
                        <input type="email" name="email" placeholder="Enter your Email" onChange={handleChange} required />

                        <input type="Password" name="password" placeholder="Enter your Password" onChange={handleChange} required />

                        <button className="bhutton" type="submit" onClick={handleSubmit}>Login</button>
                        <p className="lenk">Don't have an account? <br />
                            <Link to="/Signup">Sign-up</Link> here</p>
                        <p className="liw">Log in with</p>

                        <div className="icon">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-google"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-youtube"></a>

                        </div>
                    </div>
                </form>
            </div>

        </>

    );
}

export default withRouter(Login);