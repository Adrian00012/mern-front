
import React from 'react'
import "./styles.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const TarjetaDetalles = (props)=>{
  let gender=props.gender!="Male"?"chica":("chico")
    return (
      <div className='CardDetailsV'>
      <Card>
        <Card.Img alt="Card image" src={props.photo} />
        <Card.ImgOverlay><Card.Header>{props.Nombre}</Card.Header></Card.ImgOverlay>
      
      
      <Card.Body>
        <Card.Title></Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item>Cumpleaños: {props.FN}</ListGroup.Item>
        <ListGroup.Item>Gender {gender}</ListGroup.Item>
        <ListGroup.Item>Hobby: {props.hobby}</ListGroup.Item>
        <ListGroup.Item>Personalidad {props.personality}</ListGroup.Item>
        <ListGroup.Item>color: {props.colors.map((element) =><span style={{backgroundColor:`${element.toLowerCase()}`, color:`${element.toLowerCase()}`}}>{element} </span>)}</ListGroup.Item>
        <ListGroup.Item>styles: {props.styles.map((element) => 
          <span>{element} </span>
        )}</ListGroup.Item>
        </ListGroup>
        
       
      </Card.Body>
    </Card>
    </div>
    
    //     <img src={props.photo}></img>
    //     <label><span>Cumpleaños</span><span>{props.FN}</span></label>
    //     <label><span>Gender</span><span>{gender}</span></label>
    //     <label><span>Hobby</span><span>{props.hobby}</span></label>
    //     <label><span>Personalidad</span><span>{props.personality}</span></label>
    //     <label><span>Styles</span>
    //     {props.styles.map((element) => 
    //       <span>{element}</span>
    //     )}
    //  </label>
    //  <label><span>Color</span>
    //  {props.colors.map((element) => 
    //       <span style={{color:`${element.toLowerCase()}`}}>{element}</span>
    //     )}
    //  </label>
    //   {/* <img src={props.House}></img> */}
  
    );
  
}
export default TarjetaDetalles;