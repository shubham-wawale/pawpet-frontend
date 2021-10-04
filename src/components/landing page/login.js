import React from "react";
import "./login.css"

function Login() {
    return (
        <>
        <div className="main">
            <div className="content">
                <h1>PawPet</h1>
                <p className="par">If You're a Pet Lover, You've Come to the Right Place <br />
                Pup, Pup, Hooray! You Leave Em, We Love Em. <br />
                Join our growing community and find one today.</p>
                <button className="cn">Get Started</button>
            </div>
           
            <div className="foram">
                <h2>Login Here</h2>
                <input type="email" name="email" placeholder="Enter your Email" />
                <input type="Password" name="Password" placeholder="Enter your Password" />
                <button className="bhutton">Login</button>
                <p className="lenk">Don't have an account? <br />
                <a href="#">Sign Up </a>here</p>
                <p className="liw">Log in with</p>

                <div className="icon">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-google"></a>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-youtube"></a>

                </div>
            </div>

        </div>
        
        </>

    );
}

export default Login;