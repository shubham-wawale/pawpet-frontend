import React from "react";
import "./login.css"

function Login() {
    return (
        <>
        <div className="main">
            <div className="content">
                <h1>PawPet</h1>
                <p className="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Itaque optio assumenda ratione explicabo excepturi, saepe placeat <br /> nesciunt dolores? Illum, nesciunt.</p>
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