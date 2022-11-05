import React, { useState, useEffect } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
function Days(props) {
  const Lunes = props.npc.filter((e) => (e[0] === "Lunes" ? e : ""));
  const Martes = props.npc.filter((e) => (e[0] === "Martes" ? e : ""));
  const Miercoles = props.npc.filter((e) => (e[0] === "Miercoles" ? e : ""));
  const Jueves = props.npc.filter((e) => (e[0] === "Jueves" ? e : ""));
  const Viernes = props.npc.filter((e) => (e[0] === "Viernes" ? e : ""));
  const Sabado = props.npc.filter((e) => (e[0] === "Sabado" ? e : ""));
  const Domingo = props.npc.filter((e) => (e[0] === "Domingo" ? e : ""));
 
  return (
    <>
      <div >
      <h1>Npc que te han visitado</h1>
        <table class="default">
          
          <tr>
            {props.aDays.map((days) => (
              <th>{days}</th>
            ))}
          </tr>
          <tr>
            <td >{Lunes.length > 0 ? <img src={Lunes[0][1]} /> : <img />}</td>
            <td >{Martes.length > 0 ? <img src={Martes[0][1]} /> : <img />}</td>
            <td >
              {Miercoles.length > 0 ? <img src={Miercoles[0][1]} /> : <img />}
            </td>
            <td >{Jueves.length > 0 ? <img src={Jueves[0][1]} /> : <img />}</td>
            <td >{Viernes.length > 0 ? <img src={Viernes[0][1]} /> : <img />}</td>
            <td  >{Sabado.length > 0 ? <img src={Sabado[0][1]} /> : <img />}</td>
            <td >{Domingo.length > 0 ? <img src={Domingo[0][1]} /> : <img />}</td>
          </tr>
          <caption><button onClick={props.remove} disabled={props.npc.length>0?false:true}>Resetear semana</button></caption>
        </table>
        
      </div>
    </>
  );
}
export default memo(Days);
