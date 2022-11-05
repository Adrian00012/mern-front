import React, { useState, useEffect } from "react";
import { getRecords } from "./services/funciones";
import Lista from "./Components/lista";
import Days from "./Components/Days";
const getlocalItems = () => {
  let lo = JSON.parse(localStorage.getItem("Npc"));
  return lo !== null ? lo : [];
};

export default function Npc() {
  const [npcs, setNpcs] = useState([]);
  const [Card, setCard] = useState(getlocalItems());
  var day = ["L", "M", "X", "J", "V", "S","D"];
  useEffect(() => {
    getRecords(setNpcs);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("Npc", JSON.stringify(Card));
  }, [Card]);
  const addToCArt = (npcs, days) => {
    setCard([...Card, [days,npcs.iconImage]]);
  };
  const removeToCart=()=>{
   
    setCard([])
    // Card.length>1?setCard(Card.splice(Fish,1)):setCard(a)
  }
  return (
    <>
      {npcs != null ? (
        <div className="rest">
         
          <Lista npc={npcs} add={addToCArt} />
          <Days aDays={day} npc={Card}  remove={removeToCart}/>
        </div>
      ) : (
        "no hay nada"
      )}
    </>
  );
}
