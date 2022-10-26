import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Player from "./Player";
import {getRecords } from "./Services/funciones"
 function Reproductor() {
    const [records, setRecords] = useState(null);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    useEffect(() => {
      getRecords(setRecords)
      
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > 94 ) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
      
      }, [currentSongIndex]);

    return (
        <>
        {records!=null?(<div>Reproductor   
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={records}
      ></Player>
   </div>):("no hay nada")}
        </>
      
       )
  
}
export default Reproductor