import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        className="shadow-lg mb-5 bgNavbar"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="shadow mx-2"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Link to={`/abnormal-tim`} className="nav-link shadow px-2 my-2 mx-2">
                Home
              </Link>
              <Link to={`contact`} className="nav-link shadow px-2 my-2 mx-2">
                Contact
              </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" className="ms-auto">
            Abnormal
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
