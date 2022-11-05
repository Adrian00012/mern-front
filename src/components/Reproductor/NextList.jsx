import React, { useState, useRef, useEffect } from "react";
import { memo } from "react";
 function NextList(props) {
    let a=props.nextSong.filter((item) => item !==props.nextSong[props.indice] )
    // console.log(a)
  return (
    <div  className="Next">
        {a.map(p=>(
            
                <img src={p.image_uri} onClick={()=>(props.select(p))}></img>
          
        ))}
    </div>
  )
}
export default memo(NextList)