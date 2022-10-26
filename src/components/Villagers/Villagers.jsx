import PropTypes from 'prop-types'
import React, { Component , useState, useRef, useEffect } from 'react'
import {getRecords,} from "./services/funciones"
import Lista from './lista';
import BasicSelect from './Components/selectSpecies';
import { Link } from "react-router-dom";
export default function Villagers () {
  const [Villagers, setVillagers] = useState([]);
  const [age, setAge] = useState('');
  const [Cambio, setCambio] = useState(false);
  useEffect(() => {
  getRecords(setVillagers)
  

    
  }, [])
  
  return (
    <>{Villagers!=null?(
    <div>Villagers
       <BasicSelect age={age} setAge={setAge}></BasicSelect>
      <Lista Villagers={Villagers} species={age}   set={setCambio} />

      
      </div>):("no hay nada")}
    </>
    
  )
}
