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
              Villagers
            </NavLink>
            <NavLink className="nav-link" to="/Npc">
              Npc
            </NavLink>
            <NavLink className="nav-link" to="/Items">
              Items
            </NavLink>
            <NavDropdown title="Museom" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/Fosiles">
                  Fosiles
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/Fish">
                  Fish
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/Bugs">
                  Bugs
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/SeaCreatures">
                  Sea Creatures
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav-link" to="/Artwork">
                  Artwork
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
