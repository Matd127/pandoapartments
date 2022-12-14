import React from "react";
import "../css/Header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar
      bg="light"
      expand="xl"
      className="header sticky-top ms-auto mb-2 mb-lg-0"
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="logo">
            <img
              src={`${process.env.PUBLIC_URL}/img/logoPando3.png`}
              alt="cos"
            />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menu navbar-nav ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Offer</Nav.Link>
            <Nav.Link href="#link">Property for Sale</Nav.Link>
            <Nav.Link href="#link">Property for Rent</Nav.Link>
            <Nav.Link href="#link">Sell your property</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
