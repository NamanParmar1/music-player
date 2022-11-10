import React from 'react';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import "./Sidebarbutton.css";

export default function Sidebarbutton(props) {
  const location = useLocation();
  const isActive = location.pathname===props.to;

  const btnclass = isActive ?"btn-body active" : "btn-body";
  
    return (
    <Link to={props.to}>
        <div className = {btnclass}> 
        <IconContext.Provider value={{size: '24px', className:"btn-icons"}}>
            {props.icon}
            <p className='btn-title'> {props.title}</p>
            </IconContext.Provider>
         </div>
    
    </Link>
    
  )
}
