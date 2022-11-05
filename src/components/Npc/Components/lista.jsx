import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Dropdown from "react-bootstrap/Dropdown";
function Lista(props) {
  function ver() {
    return (
      <div className="cardListisNpc">
        {props.npc.map((p) => (
          // <p>{p.name}</p>

          <div className="cardNPC">
           <Link to={`/detalles/${p._id}`}>
            <img src={p.iconImage}></img>
              <p>{p.translations.eUes}</p>
              
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Days
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => props.add(p, "Lunes")}>
                  Lunes
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.add(p, "Martes")}>
                  Martes
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.add(p, "Miercoles")}>
                  Miercoles
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.add(p, "Jueves")}>
                  Jueves
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.add(p, "Viernes")}>
                  Viernes
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.add(p, "Sabado")}>
                  Sabado
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.add(p, "Domingo")}>
                  Domingo
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="lista">
    
      {ver()}
    </div>
  );
}

export default memo(Lista);
