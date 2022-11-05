import React, { Component , useState, useRef, useEffect } from 'react'
import Box from '@mui/material/Box';
import { memo } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from "react-router-dom";


function BasicSelect(props) {
    const [Cambio, setCambio] = useState(false);
    
  const handleChange = (event) => {
    props.setAge(event.target.value);
    setCambio(true);}
    const handleClick = (event) => {
        
    }
     
     
  

  return (
    <Box sx={{ minWidth: 120 }} className="Box">
      <FormControl fullWidth  className="SelectV">
        <InputLabel id="demo-simple-select-label">Especies</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.age}
          label="Seleccione la especies del aldeano"
          onChange={handleChange}
          onClick={handleClick}
         
        >
          <MenuItem value={""}>Todos</MenuItem>
          <MenuItem value={"Cat"}>Gato</MenuItem>
          <MenuItem value={"Gorilla"}>Gorila</MenuItem>
          <MenuItem value={"Squirrel"}>Ardilla</MenuItem>
          <MenuItem value={"Anteater"}>Oso Hormiguero</MenuItem>
          <MenuItem value={"Eagle"}>Aguila</MenuItem>
          <MenuItem value={"Bear cub"}>Osito</MenuItem>
          <MenuItem value={"Bird"}>Pajaro</MenuItem>
          <MenuItem value={"Bear"}>Oso</MenuItem>
          <MenuItem value={"Penguin"}>Pinguino</MenuItem>
          <MenuItem value={"Chicken"}>Gallina</MenuItem>
          <MenuItem value={"Mouse"}>Raton</MenuItem>
          <MenuItem value={"Hippo"}>Hipotamo</MenuItem>
          <MenuItem value={"Tiger"}>Tigre</MenuItem>
          <MenuItem value={"Elephant"}>Elefante</MenuItem>
          <MenuItem value={"Alligator"}>Cocodrilo</MenuItem>
          <MenuItem value={"Pig"}>Cerdo</MenuItem>
          <MenuItem value={"Kangaroo"}>Canguro</MenuItem>
          <MenuItem value={"Horse"}>Caballo</MenuItem>
          <MenuItem value={"Hamster"}>Hamster</MenuItem>
          <MenuItem value={"Lion"}>Leon</MenuItem>
          <MenuItem value={"Ostrich"}>Avestruz</MenuItem>
          <MenuItem value={"Dog"}>Perro</MenuItem>
          <MenuItem value={"Sheep"}>Oveja</MenuItem>
          <MenuItem value={"Wolf"}>Lobo</MenuItem>
          <MenuItem value={"Frog"}>Rana</MenuItem>
          <MenuItem value={"Monkey"}>Mono</MenuItem>
          <MenuItem value={"Koala"}>Koala</MenuItem>
          <MenuItem value={"Bull"}>Toro</MenuItem>
          <MenuItem value={"Rhinoceros"}>Rinoceronte</MenuItem>
          <MenuItem value={"Deer"}>Ciervo</MenuItem>
          <MenuItem value={"Goat"}>Cabra</MenuItem>
          <MenuItem value={"Duck"}>Pato</MenuItem>
          <MenuItem value={"Octopus"}>Pulpo</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default memo(BasicSelect)