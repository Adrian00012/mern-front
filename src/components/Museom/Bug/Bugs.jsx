import React, { Component , useState, useRef, useEffect } from 'react'
import { getBugs } from '../Services/funciones';
import Tarjeta from '../Components/Tarjeta';

const getlocalItems=()=>{
  let lo=JSON.parse(localStorage.getItem("Bugs") )
 return lo!==null?lo:[]
}
export default function  Bugs (){
  const [Card,setCard]=useState(getlocalItems());
    const [Bugs, setBugs] = useState([]);
    
  
    useEffect(() => {
        getBugs(setBugs)
      }, [])
    useEffect(()=>{
      window.localStorage.setItem("Bugs", JSON.stringify(Card))
    },[Card]);

      const addToCArt=(Bugs)=>{
        setCard([...Card,Bugs])
       
      }
      const removeToCart=(Bugs)=>{
        let a=Card.filter(item => item.name !== Bugs.name)
        setCard(a)
        // Card.length>1?setCard(Card.splice(Bugs,1)):setCard(a)
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
          type={"Bugs"}
          ></Tarjeta> 
        )
      }
    return (
      <>
      
      <div className='LIST'>
        {/* Bugs */}
     
      {Bugs.map((p)=>(
        trueCo(p)
      ))}
     
      </div>
      </>
    )
  
}
