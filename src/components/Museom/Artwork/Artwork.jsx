import React, { Component, useState, useRef, useEffect } from "react";
import { getArtwork, getArtworkF } from "../Services/funciones";
import Tarjeta from "../Components/Tarjeta";

const getlocalItems = () => {
  let lo = JSON.parse(localStorage.getItem("Artwork"));
  return lo !== null ? lo : [];
};
export default function Artwork() {
  const [Card, setCard] = useState(getlocalItems());
  const [Artwork, setArtwork] = useState([]);
  const [ArtworkF, setArtworkF] = useState([]);
  const [isFalse, setIsFalse] = useState(false);

  useEffect(() => {
    getArtwork(setArtwork);
    getArtworkF(setArtworkF);
  
  }, []);
  useEffect(() => {
    window.localStorage.setItem("Artwork", JSON.stringify(Card));
  }, [Card]);

  const addToCArt = (Artwork) => {
    setCard([...Card, Artwork]);
  };
  const removeToCart = (Artwork) => {
    let a = Card.filter((item) => item.name !== Artwork.name);
    setCard(a);
    // Card.length>1?setCard(Card.splice(Artwork,1)):setCard(a)
  };
 

  const trueCo = (p) => {
    let find = Card.find((item) => item.name === p.name);
    let o = find !== undefined ? true : false;
    let ImageFalse = ArtworkF.find((item) => item.name === p.name);
    let paint=ImageFalse!==undefined?ImageFalse.highResTexture:p.highResTexture;
    let escult=ImageFalse!==undefined?ImageFalse.image:p.image;
    let notImageFalse=ImageFalse===undefined?"diable":"";
    // let c=b===null?ImageFalse.image:b
  //  console.log(c)
    return (
      <Tarjeta
        iconImage={p.image}
        iconImagef={escult}
        Nombre={p.translations.eUes}
       notImageFalse={notImageFalse}
        add={addToCArt}
        remove={removeToCart}
        produ={p}
        checked={o}
        type={"Artwork"}
        Image={p.highResTexture==null?p.image:p.highResTexture}
        ImageF={paint==null?escult:paint}
        isFalse={isFalse}
        setIsFalse={setIsFalse}
        
      ></Tarjeta>
    );
  };
  return (
    <>
      <div className="LIST">
        {/* Artwork */}

        {Artwork.map((p) => trueCo(p))}
      </div>
    </>
  );
}
