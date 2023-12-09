import React from 'react';
import HeroImg2 from '../components/HeroImg2';
import "../components/About.css";


const About = () => {
  return (
    <div>
      <HeroImg2 heading={"ABOUT ME"} text={"I am a passionate Frontend Developer"}/>
      <div className='about-container'>
        <h1>Hi, Myself Rohit Jadhav</h1>
        <h2>Looking for a full time Frontend Dev Job</h2>
        <h3>Skills: HTML ,CSS ,Js ,ReactJs ,Github etc</h3>
        <h4>Can join immediately.</h4>
      </div>
    </div>
  );
};

export default About;