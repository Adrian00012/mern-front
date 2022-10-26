import React, { Component , useState, useRef, useEffect } from 'react'
import { getSeaCreatures } from '../Services/funciones';
import Tarjeta from '../Components/Tarjeta';

const getlocalItems=()=>{
  let lo=JSON.parse(localStorage.getItem("SeaCreatures") )
 return lo!==null?lo:[]
}
export default function  SeaCreatures (){
  const [Card,setCard]=useState(getlocalItems());
    const [SeaCreatures, setSeaCreatures] = useState([]);
    
  
    useEffect(() => {
        getSeaCreatures(setSeaCreatures)
      }, [])
    useEffect(()=>{
      window.localStorage.setItem("SeaCreatures", JSON.stringify(Card))
    },[Card]);

      const addToCArt=(SeaCreatures)=>{
        setCard([...Card,SeaCreatures])
       
      }
      const removeToCart=(SeaCreatures)=>{
        let a=Card.filter(item => item.name !== SeaCreatures.name)
        setCard(a)
        // Card.length>1?setCard(Card.splice(SeaCreatures,1)):setCard(a)
      }
     const trueCo=(p)=>{
        
      let find = Card.find(item => item.name === p.name)
      let o=find!=undefined?true:false
    
        return(
          <Tarjeta 
          iconImage={p.iconImage}
          Nombre={p.translations.eUes}
          add={addToCArt}
          remove={removeToCart}
          produ={p}
          checked={o}
          type={"SeaCreatures"}
          ></Tarjeta> 
        )
      }
    return (
      <>
      
      <div className='LIST'>
        {/* SeaCreatures */}
     
      {SeaCreatures.map((p)=>(
        trueCo(p)
      ))}
     
      </div>
      </>
    )
  
}
