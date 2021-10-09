import React from "react";
import "./login.css"
import { Link } from 'react-router-dom';

function Login() {
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
                <input type="email" name="email" placeholder="Enter your Email" required />
                
                <input type="Password" name="password" placeholder="Enter your Password" required />
               
                <button className="bhutton">Login</button>
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

export default Login;