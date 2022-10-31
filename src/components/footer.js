import React from "react";
import App from "../App";
import Ig from "../image/I4G.png";

function Footer(){
    return(
        <div className="footer">
            <h3>Zuri<span>.</span>Internship</h3>
            <h4>HNG Internship 9 Frontend task</h4>
            <img src={Ig}></img>
        </div>
    )
}
export default Footer;