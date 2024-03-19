import React from "react";
import "./Footer.css"
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-right">
                    <img src={assets.logo} />
                    <p> Lotem Iosum is simply dummy text of thesadgdfsgdfsgfsdgdsfgdsfgdfgdsfgdsfgsd
                        dsafsadfsadfsadfsdfasdfsadfsaddddddddddfgsdfgsdfgfd </p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} />
                        <img src={assets.twitter_icon} />
                        <img src={assets.linkedin_icon} />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-left">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-</li>
                        <li>contact@gmail.com</li>

                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-coptyright"> Copy Right 2024</p>

        </div>
    )
}
export default Footer;