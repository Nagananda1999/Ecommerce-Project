import React,{useContext,useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from "../../context/productContext/shop-context";

import Rating from '../../components/Rating';
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./ProductDetail.css"
const ProductDetail = () => {
    const location = useLocation();
    const {data}=location.state||{};
    // console.log(data);
    const { addToCart, cartItems } = useContext(ShopContext);
    const { id, productName, price, productImage,ratings,shortDiscription,longDiscription,fastDelivery } = data;
    const cartItemCount = cartItems[id];
    const navigate=useNavigate();
    const handelbackbtn = ()=>{
        navigate(-1);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const onClick=()=>{

    }
    return (
    <>
    <button
        className='backbtn'
        onClick={handelbackbtn}
    ><FaLongArrowAltLeft/></button>
    <div className='ProductDetail'>
        <div className="img">
            <img src={productImage} alt={productName} className='productimage' />
        </div>
        <div className="details">
            <h1 className="headding">{productName}</h1>
            <Rating rating={ratings} onClick={onClick}/>
            <p>₹ {price}</p>
            <br />
            <p className='shortDiscription' >{shortDiscription}</p>
            <p className='longDiscription' >{longDiscription}</p>
            <button className="addToCartBttn btn-detail" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    </div>
    </>
  )
}

export default ProductDetail