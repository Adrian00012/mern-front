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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
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
          <MenuItem value={"Squirrel"}>Squirrel</MenuItem>
          <MenuItem value={"Anteater"}>Anteater</MenuItem>
          <MenuItem value={"Eagle"}>Eagle</MenuItem>
          <MenuItem value={"Bear cub"}>Bear cub</MenuItem>
          <MenuItem value={"Bird"}>Bird</MenuItem>
          <MenuItem value={"Bear"}>Bear</MenuItem>
          <MenuItem value={"Penguin"}>Penguin</MenuItem>
          <MenuItem value={"Chicken"}>Chicken</MenuItem>
          <MenuItem value={"Mouse"}>Mouse</MenuItem>
          <MenuItem value={"Hippo"}>Hippo</MenuItem>
          <MenuItem value={"Tiger"}>Tiger</MenuItem>
          <MenuItem value={"Elephant"}>Elephant</MenuItem>
          <MenuItem value={"Alligator"}>Alligator</MenuItem>
          <MenuItem value={"Pig"}>Pig</MenuItem>
          <MenuItem value={"Kangaroo"}>Kangaroo</MenuItem>
          <MenuItem value={"Horse"}>Horse</MenuItem>
          <MenuItem value={"Hamster"}>Hamster</MenuItem>
          <MenuItem value={"Lion"}>Lion</MenuItem>
          <MenuItem value={"Ostrich"}>Ostrich</MenuItem>
          <MenuItem value={"Dog"}>Dog</MenuItem>
          <MenuItem value={"Sheep"}>Sheep</MenuItem>
          <MenuItem value={"Wolf"}>Wolf</MenuItem>
          <MenuItem value={"Frog"}>Frog</MenuItem>
          <MenuItem value={"Monkey"}>Monkey</MenuItem>
          <MenuItem value={"Koala"}>Koala</MenuItem>
          <MenuItem value={"Bull"}>Bull</MenuItem>
          <MenuItem value={"Rhinoceros"}>Rhinoceros</MenuItem>
          <MenuItem value={"Deer"}>Deer</MenuItem>
          <MenuItem value={"Goat"}>Goat</MenuItem>
          <MenuItem value={"Duck"}>Duck</MenuItem>
          <MenuItem value={"Octopus"}>Octopus</MenuItem>
          <MenuItem value={"Ostrich"}>Ostrich</MenuItem>
         

        </Select>
      </FormControl>
    </Box>
  );
}
export default memo(BasicSelect)