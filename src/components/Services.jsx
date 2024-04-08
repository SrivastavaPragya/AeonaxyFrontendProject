import React from "react";
import "./Services.css"; 
import {useNavigate} from 'react-router-dom'

const Services = () => {

  const navigate=useNavigate()


  const handleFinish=()=>{
    navigate('/confirm')
  }
  return (
    <div className="services">
      <h1 className="logo">dribbble</h1>
      <div className="under-services">
        <h2>What brings you to Dribbble?</h2>
        <p>
          Select the options that best describe you. Don’t worry, you can
          explore other options later.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="card-img">
              <img
                src="/cardImage1.jpeg"
                alt="I’m a designer looking to share my work"
              />
            </div>
            <p className="disp">I’m a designer looking to share my work</p>
            <p className="hid">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis quam sequi distinctio!
            </p>
          </div>
          <div className="service-card">
            <div className="card-img">
              <img src="cardImage2.jpeg" alt="I’m looking to hire a designer" />
            </div>
            <p className="disp">I’m a designer looking to share my work</p>
            <p className="hid">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis quam sequi distinctio!
            </p>
          </div>
          <div className="service-card">
            <div className="card-img">
              <img
                src="cardImage3.jpeg"
                alt="I’m looking for design inspiration"
              />
            </div>
            <p className="disp">I’m a designer looking to share my work</p>
            <p className="hid">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis quam sequi distinctio!
            </p>
          </div>
        </div>

        <button className="finish-btn" onClick={handleFinish}>Finish</button>
      </div>
    </div>
  );
};

export default Services;
