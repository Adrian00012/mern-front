import React, { Component , useState, useRef, useEffect } from 'react'
import { getFish } from '../Services/funciones';
import Tarjeta from '../Components/Tarjeta';

const getlocalItems=()=>{
  let lo=JSON.parse(localStorage.getItem("Fish") )
 return lo!==null?lo:[]
}
export default function  Fish (){
  const [Card,setCard]=useState(getlocalItems());
    const [Fish, setFish] = useState([]);
    
  
    useEffect(() => {
        getFish(setFish)
      }, [])
    useEffect(()=>{
      window.localStorage.setItem("Fish", JSON.stringify(Card))
    },[Card]);

      const addToCArt=(Fish)=>{
        setCard([...Card,Fish])
       
      }
      const removeToCart=(Fish)=>{
        let a=Card.filter(item => item.name !== Fish.name)
        setCard(a)
        // Card.length>1?setCard(Card.splice(Fish,1)):setCard(a)
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
          type={"Fish"}
          ></Tarjeta> 
        )
      }
    return (
      <>
      
      <div className='LIST'>
        {/* Fish */}
     
      {Fish.map((p)=>(
        trueCo(p)
      ))}
     
      </div>
      </>
    )
  
}
