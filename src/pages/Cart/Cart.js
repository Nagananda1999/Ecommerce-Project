import React, { useContext,useEffect,useState } from "react";
import { ShopContext } from "../../context/productContext/shop-context";
import  Products  from "../../Products";
import { CartItem } from "../../components/Cart-Item";
import { useNavigate } from "react-router-dom";
import backImg from "../../assets/cartEmpty.png"
import "./Cart.css";
import {UserContext} from "../../context/UserContext/UserContext"
import { Collapse,Card,CardTitle,CardHeader} from 'reactstrap';

 const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  
  const {state} = useContext(UserContext);
  const {users,user} = state;

  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState();
  const [email,setEmail] = useState("");
  const [name,setName] = useState();

  useEffect(()=>{
    if(!!user){
      const u =users.find(u=>user.name===u.name);
      setEmail(u.email)
      setName(user.name);
      console.log("called")
    }
  },[]);


  const navigate=useNavigate();

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggle1 = () => setIsOpen1(true);
  const toggle2 = () => setIsOpen2(!isOpen2);

  const handleProceed = () =>{
    if(user){
      toggle1();
    }else{
      const bool= window.confirm("Please Login To Proceed")
      if(bool){
        navigate("/Login")
      }
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    toggle2();
  }
  return (
    <div className="cart">
      <div className="Items">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <>
          <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          
          <button
          className="cart-btn"
            onClick={handleProceed}
          >
            proceed
          </button>
          </div>
          <Collapse className="colapse" isOpen={isOpen1} >
           <Card>
           <form className="CheckoutForm" onSubmit={handleSubmit} >
            <label htmlFor="name">Name</label>
              <input 
                type="text"
                name="name" 
                id="name" 
                value={name}
                placeholder='USERNAME'
                readOnly/>

              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                name="email"
                id="email" 
                value={email}
                placeholder='E-MAIL' 
                readOnly/>

                
                <textarea name="address" 
                          id="address" 
                          cols="30" 
                          rows="5"
                          placeholder="Address.."
                          required
                          value={address}
                          onChange={e=>setAddress(e.target.value)}
                          />
                <label htmlFor="phoneNo">Phone-No</label>
                <input 
                    type="tel"
                    name="phone" 
                    id="phone"
                    required
                    value={phone}
                    pattern="[0-9]{10}"
                    onChange={e=>setPhone(e.target.value)}
                    placeholder="Phone-No"
                    />
                    <button className="cart-btn"
                    >Proceed</button>
            </form>
           </Card>
          </Collapse>
          <Collapse className="colapse" isOpen={isOpen2}>
            <Card>
            <table className="review">
              <tr>
                <td>Contact:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{address}</td>
              </tr>
            </table>
            <button
            className="cart-btn"
              onClick={()=>checkout()}
            >Checkout</button>
            </Card>
            
          </Collapse>
        </>
        
      ) : (
        <img src={backImg} alt="img" />
      )}
    </div>
  );
};
export default Cart;