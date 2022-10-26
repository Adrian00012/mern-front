import "./styles.css";
import React from 'react'
const Tarjeta = (props)=>{
    return (
      <div className='Tarjeta'>
         <img src={props.iconImage}></img>
         <p>{props.Nombre}</p>
     
      </div>
    );
  
}
export default Tarjeta;