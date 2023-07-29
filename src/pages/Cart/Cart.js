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
            onClick={handleProceed}
          >
            proceed
          </button>
          </div>
          <Collapse className="colapse" isOpen={isOpen1} >
            <form onSubmit={handleSubmit} >
              <input 
                type="text"
                name="name" 
                id="name" 
                value={name}
                placeholder='USERNAME'
                readOnly/>


              <input 
                type="text" 
                name="email"
                id="email" 
                value={email}
                placeholder='E-MAIL' 
                readOnly/>

                {/* TODO: address, phone number display data checkout*/}
                <textarea name="address" 
                          id="address" 
                          cols="30" 
                          rows="5"
                          placeholder="Address.."
                          required
                          value={address}
                          onChange={e=>setAddress(e.target.value)}
                          />
                <input 
                    type="tel"
                    name="phone" 
                    id="phone"
                    required
                    value={phone}
                    pattern="[0-9]{10}"
                    onChange={e=>setPhone(e.target.value)}
                    />
                    <button
                    >Proceed</button>
            </form>
          </Collapse>
          <Collapse className="colapse" isOpen={isOpen2}>
            <Card>
            <table>
              <tr>
                <td>Contact</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{address}</td>
              </tr>
            </table>
            </Card>
            <button
              onClick={()=>checkout()}
            >Checkout</button>
          </Collapse>
        </>
        
      ) : (
        <img src={backImg} alt="img" />
      )}
    </div>
  );
};
export default Cart;