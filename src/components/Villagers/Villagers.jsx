import PropTypes from 'prop-types'
import React, { Component , useState, useRef, useEffect } from 'react'
import {getRecords,} from "./services/funciones"
import Lista from './lista';
import BasicSelect from './Components/selectSpecies';
import "./styles.css";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
export default function Villagers () {
  const [Villagers, setVillagers] = useState([]);
  const [age, setAge] = useState('');
  const [Cambio, setCambio] = useState(false);
  useEffect(() => {
  getRecords(setVillagers)
  }, [])
  
  return (
    <>{Villagers!=null?(
    <div className='Villagers'>
       <BasicSelect age={age} setAge={setAge}></BasicSelect>
      <Lista Villagers={Villagers} species={age}  set={setCambio} />
      </div>):(<Spinner></Spinner>)}
    </>
    
  )
}
