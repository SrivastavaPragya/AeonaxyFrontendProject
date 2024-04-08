// Confirm.jsx
import React from 'react';
import './Confirm.css'; // Make sure to create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Confirm = () => {
  return (
    <div className="confirm-page">

<header className="confirm-header">
        <div className="logo">dribbble</div>
        <div className="confirm-nav">
        
          <a href="#inspiration" className='color'>Inspiration</a>
          <a href="#find-work" className='color'>Find Work</a>
          <a href="#learn-design" className='color'>Learn Design</a>
          <a href="#go-pro" className='color'>Go Pro</a>
          <a href="#hire-designers" className='color'>Hire Designers</a>
         
            <input type="search"  className="search"placeholder="Search..." />
            <img src="/images.jpg" alt="" />
          
          <a href="#upload" className="upload-button">Upload</a>
        </div>
      </header>

    <div className="confirm">
      <div className="confirmation-content">
        <h1>Please verify your email...</h1>

        <div className="email-confirmation">
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} size="5x"  />
        </div>
        <br />
          <p>Please verify your email address. We've sent a confirmation email to:</p>
          <br />
          <p className="email">account@refero.design</p>
          <br />
          <p>Click the confirmation link in that email to begin using Dribbble.</p>
          <br />
          <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <a href="#resend" style={{color:" #d44179",textDecoration:"none"}}>resend the confirmation email</a>.</p>
          <br />
          <p>Wrong email address? <a href="#change" style={{color:" #d44179",textDecoration:"none"}}>Change it.</a></p>
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default Confirm;
