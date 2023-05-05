import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header=()=>{
    return(
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">BongoChef</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  ">
           <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Button variant="primary" className="d-flex justify-content-around">Login </Button>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
};
export default Header;