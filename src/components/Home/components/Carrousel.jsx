import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react'
function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/3JRHTKM4/H2x1-NSwitch-Animal-Crossing-New-Horizons-image1600w.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bienvenido a ACNH-WORLD</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/NMy8sPBp/ac-new-horizons-hhp-artwork-01-1920x1080-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Disfruta del contenido</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/8k9K6MY7/Hr-Sdf-Srw-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Decubre todos los secretos</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;