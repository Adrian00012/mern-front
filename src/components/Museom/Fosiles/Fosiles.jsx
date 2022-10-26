import React, { useState, useEffect } from 'react'
import { getFosiles } from '../Services/funciones';
import Tarjeta from '../Components/Tarjeta';

const getlocalItems=()=>{
  let lo=JSON.parse(localStorage.getItem("Fosiles") )
 return lo!==null?lo:[]
}
export default function  Fosiles (){
  const [Card,setCard]=useState(getlocalItems());
    const [Fosiles, setFosiles] = useState([]);
  
    useEffect(() => {
        getFosiles(setFosiles)
        
      }, [])
    useEffect(()=>{
      window.localStorage.setItem("Fosiles", JSON.stringify(Card))
    },[Card]);

      const addToCArt=(Fosiles)=>{
        setCard([...Card,Fosiles])
       
      }
      
      const removeToCart=(Fosiles)=>{
        let a=Card.filter(item => item.name !== Fosiles.name)
        setCard(a)
        // Card.length>1?setCard(Card.splice(Fosiles,1)):setCard(a)
      }
     const trueCo=(p)=>{
        
      let find = Card.find(item => item.name === p.name)
      let o=find!==undefined?true:false
    
        return(
          <Tarjeta 
          iconImage={p.image}
          Nombre={p.translations.eUes}
          add={addToCArt}
          remove={removeToCart}
          produ={p}
          checked={o}
          type={"Fosile"}
          ></Tarjeta> 
        )
      }
    return (
      <>
      
      <div className='LIST'>
        {/* Fosiles */}
     
      {Fosiles.map((p)=>(
        trueCo(p)
      ))}
     
      </div>
      </>
    )
  
}
