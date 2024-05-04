import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../assets/assets";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");
    const [checked, setChecked] = useState(false); // State variable to track checkbox status

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleToggle = () => {
        setCurrentState(currentState === "Login" ? "Sign Up" : "Login");
        setData({
            name: '',
            email: '',
            password: ''
        });
        setChecked(false); // Reset the state of the checkbox
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    return (
        <div className="login-popup">
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                {currentState === "Sign Up" && (
                    <input type="text" placeholder="Your name" name="name" value={data.name} onChange={handleChange} />
                )}
                <div className="login-popup-inputs">
                    <input type="email" placeholder="Your email" name="email" value={data.email} onChange={handleChange} />
                    <input type="password" placeholder="Password" name="password" value={data.password} onChange={handleChange} />
                </div>
                <button type="submit">{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" checked={checked} onChange={handleCheckboxChange} required />
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
