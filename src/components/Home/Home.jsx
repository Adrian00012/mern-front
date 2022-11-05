import React, { Component } from 'react'
import Carrousel from './components/Carrousel'
import ButtonsHome from './components/Buttons';
import "./components/styles.css";
export default class Home extends Component {
  render() {
    return (
      <div>
      <Carrousel></Carrousel>
      <div className='Grid-Buttons'>
       
        <ButtonsHome
        nombre={"Reproductor"}
        foto={"https://i.postimg.cc/J4Fdt4Yd/animal-crossing-new-horizons-kk-slider-790x790-t7fn-1080.webp"}
        ruta={"Reproductor"}
        ></ButtonsHome>
        <ButtonsHome
        nombre={"Villagers"}
        foto={"https://i.postimg.cc/GmS8Kg9g/Villagers-2.png"}
        ruta={"Villagers"}
        ></ButtonsHome>
        <ButtonsHome
        nombre={"Npc"}
        foto={"https://i.postimg.cc/pXZ5Bqnw/header-char-1.png"}
        ruta={"Npc"}
        ></ButtonsHome>
         <ButtonsHome
        nombre={"Items"}
        foto={"https://i.postimg.cc/KvbHdvp6/animal-crossing-new-horizons-tom-nook-790x790-q828-1080.webp"}
        ruta={"Items"}
        ></ButtonsHome>
         <ButtonsHome
        nombre={"Fosiles"}
        foto={"https://i.postimg.cc/dVpmc5th/museum.png"}
        ruta={"Fosiles"}
        ></ButtonsHome>
         <ButtonsHome
        nombre={"Peces"}
        foto={"https://i.postimg.cc/NFC270KK/museum1.png"}
        ruta={"Fish"}
        ></ButtonsHome>
         <ButtonsHome
        nombre={"Bichos"}
        foto={"https://i.postimg.cc/c1kvzrJH/museum2.png"}
        ruta={"Bugs"}
        ></ButtonsHome>
         <ButtonsHome
        nombre={"Criaturas Marinas"}
        foto={"https://i.postimg.cc/9MpL2yns/NSwitch-Animal-Crossing-New-Horizons-Overview-More-Things-Side-Img-left-03.png"}
        ruta={"SeaCreatures"}
        ></ButtonsHome>
         <ButtonsHome
        nombre={"Arte"}
        foto={"https://i.postimg.cc/gJS34s5c/NSwitch-Animal-Crossing-New-Horizons-Overview-More-Things-Side-Img-right-01.png"}
        ruta={"Artwork"}
        ></ButtonsHome>
      </div>
      </div>
    )
  }
}
