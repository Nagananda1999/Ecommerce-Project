import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/slide1.webp"
import slide2 from "../assets/slide2.webp"
import slide3 from "../assets/slide3.webp"

const Slider = () => {
    return(
        <>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                />

                
                
            </Carousel.Item>
            
            
        </Carousel>

                    
        </>
            
    );
}



export default Slider;