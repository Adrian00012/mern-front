import React, { Component, useState, useRef, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import Button from 'react-bootstrap/Button';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
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
          <button onClick={handleOpen}>
            {" "}
            <img src={props.iconImage}></img>
          </button>
          {/* <img src={props.iconImage}></img>
           <p>{props.Nombre}</p>  */}

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
              <h1>{props.Nombre}</h1>
                <img src={props.iconImage}></img>
                <p>Precio: {props.produ.sell} <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img></p>
                <p>Obtencion: {props.produ.source}</p>
                <p>Descripcion: <span>{props.produ.description}</span></p>
                <button onClick={() => props.add(props.produ)}>Add</button>
                <button onClick={() => props.remove(props.produ)}>
                  Borrar
                </button>
              </Box>
            </Fade>
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
          <button onClick={handleOpen}>
            {" "}
            <img src={props.iconImage}></img>
          </button>
          {/* <img src={props.iconImage}></img>
           <p>{props.Nombre}</p>  */}

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <h1>{props.Nombre}</h1>
                <img src={props.produ.critterpediaImage}></img>
                <p>Precio: {props.produ.sell} <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img></p>
                <p>Obtencion: {props.produ.whereHow}</p>
                <p>Descripcion: <span>{props.produ.description}</span></p>
                <button onClick={() => props.add(props.produ)}>Add</button>
                <button onClick={() => props.remove(props.produ)}>
                  Borrar
                </button>
              </Box>
            </Fade>
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
          <button onClick={handleOpen}>
            {" "}
            <img src={props.iconImage}></img>
          </button>
          {/* <img src={props.iconImage}></img>
             <p>{props.Nombre}</p>  */}

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <p>{props.Nombre}</p>
                <img src={props.produ.critterpediaImage}></img>
                <p>Precio: {props.produ.sell} <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img></p>
                <p>Obtencion: {props.produ.whereHow}</p>
                <p>Descripcion: <span>{props.produ.description}</span></p>
                <button onClick={() => props.add(props.produ)}>Add</button>
                <button onClick={() => props.remove(props.produ)}>
                  Borrar
                </button>
              </Box>
            </Fade>
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
            <button onClick={handleOpen}>
              {" "}
              <img src={props.iconImage}></img>
            </button>
            {/* <img src={props.iconImage}></img>
               <p>{props.Nombre}</p>  */}
  
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <h1>{props.Nombre}</h1>
                  <img src={props.produ.critterpediaImage}></img>
                <p>Precio: {props.produ.sell} <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img></p>
                {/* <p>Obtencion: {props.produ.whereHow}</p> */}
                <p>Descripcion: <span>{props.produ.description}</span></p>
                  <button onClick={() => props.add(props.produ)}>Add</button>
                  <button onClick={() => props.remove(props.produ)}>
                    Borrar
                  </button>
                </Box>
              </Fade>
            </Modal>
          </div>
        );
        case "Artwork":
          return (
            <div className="TarjetaF">
              
              {props.checked === true ? (
                <img src="https://i.postimg.cc/527Z1RWx/Museum-NH-Map-Icon-Small.png"></img>
              ) : (
                <img></img>
              )}
              <button onClick={handleOpen}>
                {" "}
                <img src={props.iconImage}></img>
              </button>
              {/* <img src={props.iconImage}></img>
                 <p>{props.Nombre}</p>  */}
    
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <h1>{props.Nombre}</h1>
                    <button onClick={() => props.add(props.produ)}>Add</button>
                    <button onClick={() => props.remove(props.produ)}>Borrar</button>
                    <button onClick={()=>props.setIsFalse(!props.isFalse)} disabled={props.notImageFalse} >False</button>
                    {/* <img src={props.iconImage}></img> */}
                    {props.isFalse===true?(<img src={props.Image}></img>):(<img src={props.ImageF}></img>)}  
                    <p>Precio: {props.produ.sell} <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img></p>
                   
                  </Box>
                </Fade>
              </Modal>
            </div>
          );
    default:
      break;
  }
};
export default Tarjeta;
