import React,{useContext} from "react";
import { ShopContext } from "../../context/productContext/shop-context";
import { useNavigate } from "react-router-dom";
import Rating from '../../components/Rating';
const Product = (props) =>{
    const { id, productName, price, productImage,ratings } = props.data;
    const data = props.data
    const { addToCart, cartItems } = useContext(ShopContext);
    const navigate=useNavigate();
    const cartItemCount = cartItems[id];
    const handelProductDetailsClick = ()=>{
        navigate("/MainCategory/ProductDetail",{state:{data}});
    }
    const onClick=()=>{
        
    }
    return(
        <div className="product"
            
        >   
            <img src={productImage} alt="img" 
                onClick={handelProductDetailsClick}
            />
            <div className="description"
                onClick={handelProductDetailsClick}
            >
                <p>
                <b>{productName}</b>
                </p>
                <p> ₹{price}</p>
                <p><Rating rating={ratings} onClick={onClick}/></p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
         </div>
    )
}
export default Product;