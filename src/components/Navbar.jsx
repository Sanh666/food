import React, { useState } from "react";
import './Navbar.css';
import { assets } from "../assets/assets";

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home")
    return (
        <div className="navbar">
            <img src={assets.logo} alt="Logo" className="navbar-logo" />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu </li>
                <li onClick={() => setMenu("blog")} className={menu === "blog" ? "active" : ""}>blog </li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}> contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Logo" />
                <div className="navbar-seacrh-icon">
                    <img src={assets.basket_icon} alt="Logo" />
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>

            </div>

        </div>


    );
}

export default Navbar;
