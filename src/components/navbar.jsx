import React from "react";

// We import bootstrap to make our application look better.
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink } from "react-router-dom";

export default function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
         
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/Reproductor">
              Music
            </NavLink>
            <NavLink className="nav-link" to="/Villagers">
              Aldeanos
            </NavLink>
            <NavLink className="nav-link" to="/Npc">
              Npc
            </NavLink>
           
            <NavDropdown title="Museom" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/Fosiles">
                  Fosiles
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/Fish">
                  Peces
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/Bugs">
                  Bichos
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/SeaCreatures">
                  Criaturas Marinas
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/Artwork">
                  Arte
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/Items">
              Items
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
