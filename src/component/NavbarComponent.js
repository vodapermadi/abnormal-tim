import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
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
              <NavDropdown title="Contact" id="basic-nav-dropdown" className="my-2 mx-2">
                <Link to={`contact/vodapermadi`} className="dropdown-item" >
                  Philipus Voda Permadi
                </Link>
                <Link to={`contact/sabrinautami`} className="dropdown-item" >
                  Sabrina Utami
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to={`abnormal-tim`} className="navbar-brand ms-auto">
            Abnormal
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
