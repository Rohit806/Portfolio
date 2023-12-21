import "./HeroImgStyle.css";
import IntroImg from "../assets/d.jpg";
import { Link } from "react-router-dom";


import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi ,I am Rohit</p>
            <h1>Frontend Developer</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg;