import React from 'react'
import "./Sign2.css"
import { useNavigate } from 'react-router-dom';


const Sign2 = () => {

  const navigate=useNavigate()

  const handleNext2=()=>{
    navigate('/Services')
  }

  const handleReturn=()=>{
    navigate('/Sign')
  }
  return (
    <div>
       <div className="SignPageContainer1">
    <h1 className="logo">dribbble</h1>
    <div className="sign-page">
      
      <h2 style={  {fontFamily:  "Roboto",fontSize:"2.2rem",fontWeight:"800"}}>Welcome! Let's create your profile</h2>
      <p className="subtitle" style={{fontFamily:"Roboto",color:"gray"}}>Let others get to know you better! You can do these later</p>
      </div>

      <div className="avatar-section1">
        <h1 style={{fontFamily:"Poppins",fontWeight:"700",fontSize:"1.3rem"}}>Add an Avatar</h1>
        <div className="avatar-sectionStart">
        <div className="avatar-placeholder1">
      <img src="/images.jpg" alt="" />
        </div>
        <button className="choose-image-btn">Choose image</button>
      </div>
      </div>

      <div className="location-section">
        <label htmlFor="location" className="location-label" style={{fontFamily:"Poppins",fontWeight:"700",fontSize:"1.3rem"}}>Add your location</label>
        <br />
        <input type="text" id="location" placeholder="Enter a location" />
      </div>

      <button className="next-btn1" onClick={handleNext2}>Next</button>
      
      <h4 className='return' onClick={handleReturn}>or press Return</h4>
   
    </div>
   
    </div>
  )
}

export default Sign2
