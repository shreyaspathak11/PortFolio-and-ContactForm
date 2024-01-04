// ThankYou.js
import React, { useEffect } from 'react';
import "./ThankYou.css";
import thankyou from '../assets/thank-you.png';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();
  useEffect(() => {
    
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 10000);

    
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);
  return (
    <div className='thankyou'>
      <h2>Thank you for your message!</h2>
      <img src={thankyou} alt="thank-you" className='image'/>
      <p>We appreciate your contact. Will get back to you shortly.
      <br/>Have a great day!❤️</p>
    </div>
  );
};

export default ThankYou;
