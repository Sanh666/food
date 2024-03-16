import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {

    const [menu, setMenu] = useState("home")
    return (
        <div className="navbar">
            <img src="/path/to/logo.png" alt="Logo" className="navbar-logo" />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu </li>
                <li onClick={() => setMenu("blog")} className={menu === "blog" ? "active" : ""}>blog </li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}> contact us</li>
            </ul>
            <div className="navbar-right">
                <img src="/path/to/logo.png" alt="Logo" />
                <div className="navbar-seacrh-icon">
                    <img src="/path/to/logo.png" alt="Logo" />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>

            </div>

        </div>


    );
}

export default Navbar;
