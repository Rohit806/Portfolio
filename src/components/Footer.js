import React from 'react';
import './FooterStyle.css';
import { FaHome,FaPhone,FaMailBulk } from 'react-icons/fa';

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-container'>
        
        <div className='location'>
          <FaHome size={20} style={{color:"white", marginRight:"2rem"}} />
          <p>Belgaum</p>
          <p>/Karnataka</p>
        </div>

        <div className='phone'>
          <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}} />~ 8971554864</h4>
        </div>

        <div className='mail'>
          <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}} />~ rohitjadhav806@gmail.com</h4>
        </div>

      </div>
    </div>
  )
}

export default Footer