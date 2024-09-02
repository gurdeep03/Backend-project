import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css'; // Import the CSS file

import logo from "./images/logo_nobg.png";

const Hero = () => {
  return (
    <div className='hero-section'>
      <style>
        {`
         @import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');
        .btn{
          padding: 10px 10px;
          border: ##513A34;
          border-radius: 2px;
          background-image: linear-gradient(to right, #EDE5D7 , #9B8A69);
          color: #543B34;
          cursor: pointer;
          font-weight:600;
          decoration=none;
          
        
        }
       
        .hero-section {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 90vh; 
            text-align: center;
        }

        .hero-section div {
            max-width: 500px;
            padding: 10px;
            border: 2px solid #d4af37; /* Gold border */
            border-radius: 10px;
            /* background-color: #F0E2C6; Slightly transparent white background */
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .hero-section img {
            max-width: 250px;
            margin-bottom: 40px;
        }

        .hero-section h1 {
            font-size: 3rem; /* Larger font size */
            color: #F0E2C6; /* Deep Mocha color */
            font-family: 'Playwrite CU';
            font-style: normal;
            font-weight: 100 400;
            margin-bottom: 20px;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
        }
        .hero-section button {
            padding: 12px 24px;
            font-size: 1.2rem;
            color: white;
            background-color: #8B4513; /* Darker, regal brown */
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Add a subtle shadow */
        }

        .hero-section button:hover {
            background-color: #704214; /* Darker shade for hover effect */
            transform: translateY(-2px); /* Slight lift effect on hover */
        }

        `}
      </style>
      <div>
        <img src={logo} alt="Logo" />
        <h1>Treasure Of Knowledge</h1>
        <Link to="/new" className='btn'>Get Started</Link>
      </div>
    </div>
  )
}

export default Hero;