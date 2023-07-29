import React,{useEffect,useContext,useState,useRef} from "react";
import { ShopContext } from "../../context/productContext/shop-context";
import Products from "../../Products"
import Product from "./Product"
import Filter from "../../components/Filter";
import "./Category.css"
import {   Navbar,Container,FormControl } from "react-bootstrap";


const MainCategory = () =>{
  const [randomElements, setRandomElements] = useState([]);

    const {
        productDispatch,
        productState: { sort,searchQuery,byFastDelivery,byRating,clear },
      } = useContext(ShopContext);

      const pickRandomElements = () => {
        const shuffledElements = Products.sort(() => 0.5 - Math.random());
        // const selectedElements = shuffledElements.slice(0, 4);
        setRandomElements(shuffledElements);
      };
      useEffect(()=>{
        setTimeout(()=>{
            pickRandomElements();
        },1000);
        
    },[])
      
    
  
    

    const transformProducts = () => {
        let sortedProducts=randomElements;
        console.log(sortedProducts);
        if (sort) {
          sortedProducts = sortedProducts.sort((a, b) =>
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
          );
        }
        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
          }
          if (byRating) {
            sortedProducts = sortedProducts.filter(
              (prod) => prod.ratings >= byRating
            );
          }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
              prod.productName.toLowerCase().includes(searchQuery)
            );
          }
          return sortedProducts;
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    

    return(
        <>
        <Navbar bg="dark"  variant="dark"  style={{ height: 80 }}>
            <Container >
            <Navbar.Text className="search">
            <FormControl
              
              type="search"
              placeholder="Search a product..."
              className="m-auto "
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
            
          </Container>
        </Navbar>
        
        
        <div className="main">
        {/* <FaFilter></FaFilter> */}
          <Filter/>    
          {randomElements.length>0?
          (
            <div className="productContainer">
            {transformProducts().map((product) => (
            <Product data={product} key={product.id} />
            ))}
            </div>
          ):(
            <div className="productContainer ">
            {[...Array(9)].map((_, index) => (
              <div className="product products-before-load"
              ></div>
            ))}
          </div>
          )
        }
        </div>
        

        
        </>
            
    )
}

export default MainCategory;