import React,{useContext} from "react";
import {UserContext} from "../context/UserContext/UserContext"

import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaUser,FaTh } from "react-icons/fa";
import Logo from "../assets/logo3.png"
import {Dropdown,Badge,Button } from "react-bootstrap";
import "./Navbar.css"

import {ShopContext} from "../context/productContext/shop-context"

import { 
    Link,
    NavLink
 } from "react-router-dom";
import Products from "../Products";



const NavBar = () => {
    const {state} = useContext(UserContext);
    const {user} = state;

    const {getCartCount,cartItems,deleteFromCart} = useContext(ShopContext)

    const count = getCartCount();
    return(
        <>
            <nav>
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="img" /></Link>
                </div>
                <div className="items">
                    <NavLink
                        style={({isActive})=>{
                            return{
                                color:isActive?"#f5f5f5":""
                            }
                        }}
                        className="item"
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        style={({isActive})=>{
                            return{
                                color: isActive? "#f5f5f5":""
                            }
                        }}
                        className="item"
                        to="/About"
                    >
                        About
                    </NavLink>
                    
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{count}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 270 }}>
                        {count>0?(
                            <>
                            {
                            Products.map((prod)=>{
                                if (cartItems[prod.id] !== 0){
                                    return(
                                        <>
                                        <span className="cartitem" key={prod.id}>
                                        <img
                                            src={prod.productImage}
                                            className="cartItemImg"
                                            alt={prod.name}
                                        />
                                        <div className="cartItemDetail">
                                        <span>{prod.productName}</span>
                                        <span>₹ {prod.price}</span>
                                        </div>
                                        <AiFillDelete
                                            fontSize="20px"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                deleteFromCart(prod.id)
                                            }
                                        />
                                        </span>
                                        </>
                                        );}
                                })
                            }                     
                            <Link to="/cart">
                            <Button style={{ width: "95%", margin: "0 10px" }}>
                            Go To Cart
                            </Button>
                            </Link>
                            </>
                            ):(
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                            )
                        }
                        </Dropdown.Menu> 
                </Dropdown>
                {user?(
                    <NavLink 
                    style={({isActive})=>{
                        return{
                            scale: isActive? "1.5":""
                        }
                    }}
                    to="/Account" 
                    className="item account">
                        <FaUser className="account-icon"/>
                        {/* small dropdown */}
                    </NavLink>
                ):(
                    <NavLink 
                    style={({isActive})=>{
                        return{
                            scale: isActive? "1.5":""
                        }
                    }}
                    to="/Login" 
                    className="item account">
                        <FaUser className="account-icon"/>
                        {/* <FaTh className="account-icon"/> */}
                        {/* <FaBars></FaBars> */}
                    </NavLink>
                )}
                </div>
                
            </nav>
        </>
    )
};

export default NavBar;  