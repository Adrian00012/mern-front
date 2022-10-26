import React from 'react'
import { memo } from "react";
const  PlayerDetails=(props)=> {
 
  return (
      <div className='Img'>
        <h3>{props.song.name.nameEUes}</h3>
        <img src={props.song.image_uri} />
      </div>
  )
}

export default memo(PlayerDetails)