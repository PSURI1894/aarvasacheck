import React from "react";
import "./review.css";
const ReviewCard =() =>{
    return(
    <div class="reviewcard">
        <div class="headerpart">
            <div class="circle">
            </div>
            <div class="nameofuser">
                <h4 class="user">Alexandra Rivers</h4>
                <h4 class="username">@Alexandra_Rver </h4>
            </div>
            </div>
            <div>
                <h4 class="review">
                As a first-time homebuyer, I was overwhelmed by the options and paperwork. The team at Aavasa made the process seamless.They understood my needs and helped me find Show More...
                </h4>
            </div>
            <div class="lowerpart">
                <div class="rating">
                    <img src="/Services/star.png" alt="star"/>
                    <img src="/Services/star.png" alt="star"/>
                    <img src="/Services/star.png" alt="star"/>
                    <img src="/Services/star.png" alt="star"/>
                    <img src="/Services/star.png" alt="star"/>

                </div>
                <h4 class="time"> 1 month ago</h4>
            </div>
        </div>
    )
}
export default ReviewCard;