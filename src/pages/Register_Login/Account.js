import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserContext'
import backImg from "../../assets/accountBackground.png"
const Account = () => {
    const {state,logout}= useContext(UserContext);
    const {user,users} = state;
    let newUser=""
    if(user){
      newUser = users.find(u=>u.name===user.name)
      
    }
  return (
    <div>
        {user?(
          <>
            <h3>{user.name}</h3>
            <h3>{newUser.email}</h3>
          </>
        ):(<></>)}
        
        <button
          className='backbtn'
          style={{padding:10,fontSize:20}}
            onClick={logout}
        >Logout</button>
    <div className='about'>
      <img src={backImg} alt="account" />
    </div>
    </div>
  )
}

export default Account