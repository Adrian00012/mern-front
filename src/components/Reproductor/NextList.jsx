import React, { useState, useRef, useEffect } from "react";
import { memo } from "react";
 function NextList(props) {
    let a=props.nextSong.filter((item) => item !==props.nextSong[props.indice] )
    // console.log(a)
  return (
    <div  className="Next">
        <p>Next</p>
        {a.map(p=>(
            <div className="NextItem" onClick={()=>(props.select(p))}>
                <img src={p.image_uri}></img>
                <p>{p.name.nameEUes}</p>
            </div>
        ))}
    </div>
  )
}
export default memo(NextList)