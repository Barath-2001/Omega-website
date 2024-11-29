import React from "react";
import LazyLoad from "react-lazy-load";
export default function Home(){
    return(
        <div className="Home-page">
            <LazyLoad>
                <img src={require("../Images/Home1.jpg")} alt="Home page" Width="100%" height="auto" />
            </LazyLoad>
        </div>
    );
}