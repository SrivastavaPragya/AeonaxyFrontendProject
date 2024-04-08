import React from 'react'
import "./Sign.css"
import { useNavigate } from 'react-router-dom';

function Sign() {

  const navigate=useNavigate()

  const handleAccount=()=>{
    navigate('/Sign')
  }
  return (
    <>
    <div className="container">
<div className="leftDiv">

</div>
<div className="RighContainer">
<div className="RightDiv">
  <h2>Sign up to Dribbble</h2>
  <p className="error-message">•Username has already been taken</p>

  <form>
  <div className="input-row">
  <div className="input-group">
    <label htmlFor="name" style={{fontFamily:"Poppins",fontWeight:"700",fontSize:"1rem"}}>Name</label>
    <input type="text" id="name" placeholder="Name" className="input-error" />
  </div>
  <br />

  <div className="input-group">
    <label htmlFor="username" style={{fontFamily:"Poppins",fontWeight:"700",fontSize:"1rem"}}>Username</label>
    <input type="text" id="username" placeholder="Username" className="input-error" />
  </div>
</div>
<br />
    

    <label htmlFor="email" style={{fontFamily:"Poppins",fontWeight:"700",fontSize:"1rem"}}>Email</label>
    <input type="email" id="email" placeholder="account@refero.design" />

<br />
    <label htmlFor="password" style={{fontFamily:"Poppins",fontWeight:"700",fontSize:"1rem"}}>Password</label>
    <input type="password" id="password" placeholder="6+ characters" />

    <br />

    <div className="terms">
      <input type="checkbox" id="terms" />
      <label htmlFor="terms" style={{fontFamily:"Roboto"}}>
        Creating an account means you're okay <span className='termsSpan'>with our Terms of Service</span>, Privacy Policy, and our default <span className='termsSpan'> Notification Settings.</span>
      </label>
    </div>

    <br />

    <button  type="submit" onClick={handleAccount}>Create Account</button>
  </form>

  
</div>

    </div>
    </div>
    
    
    
    </>
  )
}

export default Sign
