import React, { useContext, useState } from "react";
import './Navbar.css';
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom"
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState("home")
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    const logout = () => {
        localStorage.removeItem("token");
        setToken("")
        navigate("/")
    }
    return (
        <div className="navbar">
            <Link to='/'> <img src={assets.logo} alt="Logo" className="navbar-logo" /></Link>
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu </li>
                <li onClick={() => setMenu("blog")} className={menu === "blog" ? "active" : ""}>blog </li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}> contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Logo" />
                <div className="navbar-seacrh-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="Incredibles 2 Poster" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "1" : "dot"}></div>
                    {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button>
                        : <div className="navbar-profile">
                            <img src={assets.profile_icon} />
                            <ul className="navbar-profile-dropdown">
                                <li src={assets.bag_icon}><p>Orders</p></li>
                                <hr />
                                <li onClick={() => logout()} src={assets.logout_icon}>Logout</li>
                            </ul>
                        </div>}
                </div>

            </div>

        </div>


    );
}

export default Navbar;
