import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Lista=(props)=>{
  var species = props.species;
  function ver() {
    if(species!==""){
      var specie=props.Villagers.filter(z=>z.species===species)
      return (
        <div className="cardListis">
          {specie.map((p) => (
            <div className="card">
              <Link to={`/detallesVillagers/${p._id}`}>
                <img src={p.iconImage}></img>
                <p>{p.translations.eUes}</p>
              </Link>
            </div>
          ))}
        </div>
      );
    }else{
      return (
        <div className="cardListis">
          {props.Villagers.map((p) => (
            <div className="card">
              <Link to={`/detallesVillagers/${p._id}`}>
                <img src={p.iconImage}></img>
                <p>{p.translations.eUes}</p>
              </Link>
            </div>
          ))}
        </div>)
    }}

  return (
    <div className="lista">
      lista
      {/* <Link to={`/Villagers/${species}`} >A</Link> */}
      {ver()}
    </div>
  );
}

export default memo(Lista);
