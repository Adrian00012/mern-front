import React, { Component, useState, useRef, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';
import Modal from "react-bootstrap/Modal";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import Button from "react-bootstrap/Button";

const Tarjeta = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  switch (props.type) {
    case "Fosile":
      return (
        <div className="TarjetaF">
          {props.checked === true ? (
            <img src="https://i.postimg.cc/527Z1RWx/Museum-NH-Map-Icon-Small.png"></img>
          ) : (
            <img></img>
          )}
          <button onClick={() => setOpen(true)} className="ButtonModal">
            {" "}
            <img src={props.iconImage}></img>
          </button>
          {/* <img src={props.iconImage}></img>
           <p>{props.Nombre}</p>  */}

          <Modal
            show={open}
            onHide={() => setOpen(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h1>{props.Nombre}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={props.iconImage}></img>
              <p>
                Precio: {props.produ.sell}{" "}
                <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img>
              </p>
              <p>Obtencion: {props.produ.source}</p>
              <p>
                Descripcion: <span>{props.produ.description}</span>
              </p>
              <ButtonGroup>
              <Button onClick={() => props.add(props.produ)} variant="secondary">Add</Button>
              <Button onClick={() => props.remove(props.produ)} variant="secondary">Borrar</Button>
              </ButtonGroup>
            </Modal.Body>
          </Modal>
        </div>
      );

    case "Fish":
      return (
        <div className="TarjetaF">
          {props.checked === true ? (
            <img src="https://i.postimg.cc/527Z1RWx/Museum-NH-Map-Icon-Small.png"></img>
          ) : (
            <img></img>
          )}
          <button onClick={handleOpen} className="ButtonModal">
            {" "}
            <img src={props.iconImage}></img>
          </button>
          {/* <img src={props.iconImage}></img>
           <p>{props.Nombre}</p>  */}

          <Modal
            show={open}
            onHide={() => setOpen(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h1>{props.Nombre}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={props.produ.critterpediaImage}></img>
              <p>
                Precio: {props.produ.sell}{" "}
                <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img>
              </p>
              <p>Obtencion: {props.produ.whereHow}</p>
              <p>
                Descripcion: <span>{props.produ.description}</span>
              </p>
              <ButtonGroup>
              <Button onClick={() => props.add(props.produ)} variant="secondary">Add</Button>
              <Button onClick={() => props.remove(props.produ)} variant="secondary">Borrar</Button>
              </ButtonGroup>
            </Modal.Body>
          </Modal>
        </div>
      );
    case "Bugs":
      return (
        <div className="TarjetaF">
          {props.checked === true ? (
            <img src="https://i.postimg.cc/527Z1RWx/Museum-NH-Map-Icon-Small.png"></img>
          ) : (
            <img></img>
          )}
          <button onClick={handleOpen} className="ButtonModal">
            {" "}
            <img src={props.iconImage}></img>
          </button>
          {/* <img src={props.iconImage}></img>
             <p>{props.Nombre}</p>  */}

          <Modal
            show={open}
            onHide={() => setOpen(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h1>{props.Nombre}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img src={props.produ.critterpediaImage}></img>
              <p>
                Precio: {props.produ.sell}{" "}
                <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img>
              </p>
              <p>Obtencion: {props.produ.whereHow}</p>
              <p>
                Descripcion: <span>{props.produ.description}</span>
              </p>
              <ButtonGroup>
              <Button onClick={() => props.add(props.produ)} variant="secondary">Add</Button>
              <Button onClick={() => props.remove(props.produ)} variant="secondary">Borrar</Button>
              </ButtonGroup>
            </Modal.Body>
          </Modal>
        </div>
      );
    case "SeaCreatures":
      return (
        <div className="TarjetaF">
          {props.checked === true ? (
            <img src="https://i.postimg.cc/527Z1RWx/Museum-NH-Map-Icon-Small.png"></img>
          ) : (
            <img></img>
          )}
          <button onClick={handleOpen} className="ButtonModal">
            {" "}
            <img src={props.iconImage}></img>
          </button>
          {/* <img src={props.iconImage}></img>
               <p>{props.Nombre}</p>  */}

          <Modal
            show={open}
            onHide={() => setOpen(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h1>{props.Nombre}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={props.produ.critterpediaImage}></img>
              <p>
                Precio: {props.produ.sell}{" "}
                <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img>
              </p>
              {/* <p>Obtencion: {props.produ.whereHow}</p> */}
              <p>
                Descripcion: <span>{props.produ.description}</span>
              </p>
              <ButtonGroup>
              <Button onClick={() => props.add(props.produ)} variant="secondary">Add</Button>
              <Button onClick={() => props.remove(props.produ)} variant="secondary">Borrar</Button>
              </ButtonGroup>
            </Modal.Body>
          </Modal>
        </div>
      );
    case "Artwork":
      return (
        <div className="TarjetaF" >
          {props.checked === true ? (
            <img src="https://i.postimg.cc/527Z1RWx/Museum-NH-Map-Icon-Small.png"></img>
          ) : (
            <img></img>
          )}
          <button onClick={handleOpen} className="ButtonModal">
            {" "}
            <img src={props.iconImage}></img>
          </button>
          {/* <img src={props.iconImage}></img>
                 <p>{props.Nombre}</p>  */}

          <Modal
            show={open}
            onHide={() => setOpen(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h1>{props.Nombre}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <ButtonGroup  >
              <Button onClick={() => props.add(props.produ)} variant="secondary">Add</Button>
              <Button onClick={() => props.remove(props.produ)} variant="secondary">Borrar</Button>
              <Button
                onClick={() => props.setIsFalse(!props.isFalse)}
                disabled={props.notImageFalse} variant="secondary"              >
                False
              </Button>
              </ButtonGroup>
              {/* <img src={props.iconImage}></img> */}
              {props.isFalse === true ? (
                <div>
                 <Alert variant="danger"><Alert.Heading>Es una obra falsa</Alert.Heading><img src={props.ImageF}></img> </Alert>
                
                </div>
              ) : (
                <img src={props.Image}></img>
              )}
              <p>
                Precio: {props.produ.sell}{" "}
                <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img>
              </p>
            </Modal.Body>
          </Modal>
        </div>
      );
    default:
      break;
  }
};
export default Tarjeta;
