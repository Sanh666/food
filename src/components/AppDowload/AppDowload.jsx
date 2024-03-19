import React from "react";
import "./AppDowload.css"
import { assets } from "../../assets/assets";

const AppDowload = () => {
    return (
        <div className="app-dowload" id='app-dowload'>
            <p> For  Better Experience dowload <br /> App</p>
            <div className="app-dowload-platforms">
                <img src={assets.play_store} />
                <img src={assets.app_store} />
            </div>
        </div>
    )
}
export default AppDowload;