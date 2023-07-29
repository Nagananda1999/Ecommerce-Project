import React,{useEffect, useState} from "react";
import Products from "../../Products"
import Product from "./Product"
import "./Category.css"
import { 
    Link,
 } from "react-router-dom";


const Category = () =>{

    const [randomElements, setRandomElements] = useState([]);

    const pickRandomElements = () => {
        const shuffledElements = Products.sort(() => 0.5 - Math.random());
        const selectedElements = shuffledElements.slice(0, 4);
        setRandomElements(selectedElements);
      };
    useEffect(()=>{
        setTimeout(()=>{
            pickRandomElements();
        },3000);
    },[])
    return(
        <>
        <div className="heading" id="#catogories">Products</div>

        {/* TODO:  Catogry selector*/}

        { randomElements.length>0? (
            <div className="products">
            {randomElements.map((product) => (
            <Product data={product} />
            ))}
        </div>
        ):(<div className="products ">
            {[...Array(4)].map((_, index) => (
              <div className="product products-before-load"
              ></div>
            ))}
          </div>
        )
            
        
        }

        <div className="more">
            <Link to="/MainCategory" className="morelink">More Products</Link>
        </div>
        </>
            
    )
}

export default Category;