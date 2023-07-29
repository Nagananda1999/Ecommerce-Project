import { createContext, useState,useReducer } from "react";
import  Products  from "../../Products";
import {filterReducer} from "./filterReducer"
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = [];
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getCartCount = ()=>{
    let count=0;
    for(const i in cartItems){
      count+=cartItems[i];
    }
    return count;
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const deleteFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:0}))
  }
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const [productState, productDispatch] = useReducer(filterReducer, {
    clear:false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  // console.log(productState);

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    getCartCount,
    checkout,
    deleteFromCart,
    productState,
    productDispatch
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
