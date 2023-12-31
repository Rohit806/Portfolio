import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css";
import { FaBars,FaTimes } from "react-icons/fa";//We are importing icon bar from fa category


const Navbar = () => {

  const[click,setClick]=useState(false);
  const handleClick = ()=> setClick(!click);



  return (
    <div className='header'>
       <Link to="/">
            <h1>ROHIT J</h1> 
         </Link>
    <ul className={click ? "nav-menu active" : "nav-menu"}> {/* If click true first css class is shown else..sec*/}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>

    <div className='hamburger' onClick={handleClick}>  
      {click  ?  (<FaTimes size={20} style={{color:'white'}}/>)  :
        ( <FaBars size={20} style={{color:'white'}}/>) }
    </div>
    </div>

    
  )
}

export default Navbar;