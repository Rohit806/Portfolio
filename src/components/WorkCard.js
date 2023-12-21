import React from 'react'
import WorkCardData from "./WorkCardData"
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
       <img src={props.imgsrc} alt="image"/>
       <h2 className="project-title">{props.title}</h2>
         <div className="pro-details">
               <p>{props.text}</p>
               <div className="pro-btns">
                   <NavLink to={props.view} target="_blank" className="view-btn"><b>View</b></NavLink>
               </div>
         </div>{/*target="_blank opens link in new tab"*/}
   </div>
  );
};

export default WorkCard;