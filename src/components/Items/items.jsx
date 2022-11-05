import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import React, { Component, useState, useRef, useEffect } from "react";
import { getItems } from "./services/funciones";
import "./styles.css";
export default function Items() {
  const [Items, setItems] = useState([]);
 
  useEffect(() => {
    getItems(setItems);
  }, []);

  return (
    <div className="CardContenedor">
      {Items.map((p) => (
        <Card className="Card-Items">
          <Card.Img
            variant="top"
            src={p.image !== undefined ? p.image : p.variations[0].image}
          />
          <Card.Body>
            <Card.Title>{p.translations.eUes}</Card.Title>

            <Card.Subtitle>
              Precio:{p.buy !== -1 ? p.buy : "Se obtiene en evento"}
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <ButtonGroup aria-label="Basic example">
              <Button variant="success" className="btn-items">
                <img src="https://i.postimg.cc/VLMPV76t/bells.png"></img>
              </Button>
              <Button variant="success" >
                ❌
              </Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}
