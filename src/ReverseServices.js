import React from "react";
import "./reverseservices.css";

const ReverseServices =({ heading, text, imageSrc}) =>{

    return(
        <div class="componentone">
            <div class="imageone">
                <img src={imageSrc} alt={heading} ></img>
            </div>

            <div class="textforcardone">
                <h4 class="headingone">{heading} </h4>
                <h4 class="textinsideone">{text}</h4>
                <button class="readmoreone">Read More </button>
            </div>
            
        </div>
    )

}
export default ReverseServices;
