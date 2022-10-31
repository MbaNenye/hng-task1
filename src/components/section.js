import React from "react";
import slack from "../image/slack.png";
import github from "../image/Icon.png";

function Section(){
    return(
       <div className="sec">
        <img src={slack}/>
        <img src={github}/>
       </div> 
    )
}

export default Section;


