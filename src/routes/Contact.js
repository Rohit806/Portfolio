import React from 'react';
import HeroImg2 from '../components/HeroImg2';
import { NavLink } from 'react-router-dom';
import "../components/Contact.css";

const Contact = () => {
  
  return (
    <div>
      <HeroImg2 heading={"Contact Me"} text={"Open for full time Frontend dev roles."}/>
      <div className='contact-container'>
        <div className='contact-btn'>
           <div className='cbtn' >
            <NavLink to="mailto:rohitjadhav806@gnail.com">CONTACT ME</NavLink>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Contact