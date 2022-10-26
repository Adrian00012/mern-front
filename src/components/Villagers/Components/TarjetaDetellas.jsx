
import React from 'react'
import "./styles.css";
const TarjetaDetalles = (props)=>{
  let gender=props.gender!="Male"?"chica":("chico")
    return (
      <div  className="TarjertaDetalles">
        <img src={props.photo}></img>
        <label><span>Cumpleaños</span><span>{props.FN}</span></label>
        <label><span>Gender</span><span>{gender}</span></label>
        <label><span>Hobby</span><span>{props.hobby}</span></label>
        <label><span>Personalidad</span><span>{props.personality}</span></label>
        <label><span>Styles</span>
        {props.styles.map((element) => 
          <span>{element}</span>
        )}
     </label>
     <label><span>Color</span>
     {props.colors.map((element) => 
          <span style={{color:`${element.toLowerCase()}`}}>{element}</span>
        )}
     </label>
      {/* <img src={props.House}></img> */}
      </div>
    );
  
}
export default TarjetaDetalles;