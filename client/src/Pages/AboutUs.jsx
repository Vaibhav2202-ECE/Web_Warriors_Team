import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutUs.css';

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="about-us">
      <div className="header">
        <h1>Our Company</h1>
        <p>
          AmbuSwift is a revolutionary website for streamlining ambulance booking and tracking during emergencies.
        </p>
      </div>
      <Slider {...settings}>
        <div className="section">
          <h2>Services</h2>
          <p>
            1. Ambulance operators can access detailed navigation instructions and prioritize emergency calls based on urgency and proximity.<br />
            2. The Website provides real-time tracking of ambulance location and ETA, optimizing routing to reach the nearest hospital efficiently.
          </p>
        </div>
        <div className="section">
          <h2>Motives</h2>
          <p>
            1. Allows users to monitor ambulance location instantly during emergencies.<br />
            2. Matches ambulance availability with hospital capacities for efficient resource allocation.
          </p>
        </div>
        <div className="section">
          <h2>Vision</h2>
          <p>
            1. Social responsibility: Focus on social impact, aiming to improve healthcare accessibility and reduce disparities in emergency response outcomes.<br />
            2. Collaboration opportunities:  Exploring partnerships with healthcare providers, govt. agencies, and tech companies to enhance services and reach wider audiences.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default AboutUs;
