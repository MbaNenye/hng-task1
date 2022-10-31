import React from "react";
import App from "../App";
import nenye4 from '../image/nenye4.jpg';
import Share from '../image/share.png';
import Sharee from '../image/sharee.png';

function Profile(){
    return(
       <div>
        
           <div>
            <img src={Share} class="dot"/>
        </div>
        <img src={nenye4} className="Nen" id="profile_img"/>
        <h1>Nenye Mba</h1>
       </div> 
    )
}

export default Profile;