import React from 'react';
import './SignPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SignPage = () => {

  const navigate=useNavigate()



  const handleNext=()=>{
    navigate('/Signup')
  }
  return (
    <>
    <div className="SignPageContainer">
    <h1 className="logo">dribbble</h1>
    <div className="sign-page">
      
      <h2 style={  {fontFamily:  "Roboto",fontSize:"2.2rem",fontWeight:"800"}}>Welcome! Let's create your profile</h2>
      <p className="subtitle" style={{fontFamily:"Roboto",color:"gray"}}>Let others get to know you better! You can do these later</p>
      </div>

      <div className="avatar-section">
        <h1 style={{fontFamily:"Poppins",fontWeight:"700",fontSize:"1.3rem"}}>Add an Avatar</h1>
        <div className="avatar-sectionStart">
        <div className="avatar-placeholder">
        <FontAwesomeIcon icon={faCamera} className="camera-icon" />
        </div>
        <button className="choose-image-btn">Choose image</button>
      </div>
      </div>

      <div className="location-section">
        <label htmlFor="location" className="location-label" style={{fontFamily:"Poppins",fontWeight:"700",fontSize:"1.3rem"}}>Add your location</label>
        <br />
        <input type="text" id="location" placeholder="Enter a location" />
      </div>

      <button className="next-btn" onClick={handleNext}>Next</button>
   
    </div>
    </>
  );
};

export default SignPage;
