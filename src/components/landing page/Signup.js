import React,{useState} from "react";
import "./signup.css"
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

function Signup(props) {
    const [signup, setSignup] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setSignup( prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        } );
        
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

export default withRouter(Signup);