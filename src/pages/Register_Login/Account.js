import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserContext'
import backImg from "../../assets/accountBackground.png"
import { MdAccountBox } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Account = () => {
    const {state,logout}= useContext(UserContext);
    const {user,users} = state;
    const navigate=useNavigate();
    let newUser=""
    if(user){
      newUser = users.find(u=>u.name===user.name)
      
    }
  return (
    <div>
        {user?(
          <div
            style={{width:'fit-content',margin:'auto'}}
          >
            <MdAccountBox style={{width:400,height:400}} />
            <h3
            style={{margin:'0px 50px'}}
            >{user.name}</h3>
            <h3
            style={{margin:'0px 50px'}}
            >{newUser.email}</h3>
            <button
              className='backbtn'
              style={{padding:'5px 15px',fontSize:20,margin:'5px auto',display:'block'}}
                onClick={()=>{
                  logout();
                  navigate(-1);
                }}
            >Logout</button>
          </div>
        ):(<>
            <div className='about'>
              <img src={backImg} alt="account" />
            </div>
        </>)}
        
        
    
    </div>
  )
}

export default Account