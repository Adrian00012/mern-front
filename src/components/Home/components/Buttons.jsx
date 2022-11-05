import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default function ButtonsHome (props) {
 
    return (
        <div id="box" >
           
            <NavLink className="nav-linkH" to={"/"+props.ruta}>
            <h1>{props.nombre}</h1>
            <img src={props.foto}/>
            </NavLink>
       
        </div>
    )
  
}
