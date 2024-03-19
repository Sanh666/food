import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");

    const handleToggle = () => {
        setCurrentState(currentState === "Login" ? "Sign Up" : "Login");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="login-popup">
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                {currentState === "Sign Up" && (
                    <input type="text" placeholder="Your name" />
                )}
                <div className="login-popup-inputs">
                    <input type="email" placeholder="Your email" />
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit">{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                <p>
                    {currentState === "Login"
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <span onClick={handleToggle}>
                        {currentState === "Login" ? "Sign Up here" : "Login here"}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginPopup;
