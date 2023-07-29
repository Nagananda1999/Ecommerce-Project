import React from "react";
import Slider from "../../components/Slider"
import "./Home.css"
import Category from "../Products/Category";

const Home = ()=>{
     
 
    
    return(
        <>
        <div className="slider">
            <Slider />
        </div>
        <div    className="Category">
            <Category/>
        </div>
        </>
    )
}
export default Home;