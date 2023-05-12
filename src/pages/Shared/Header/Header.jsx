import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
// import { CgProfile } from "react-icons/fa";
// import {  } from "react-icons/fa";
// import Blog from "../Blog/Blog";
const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-dark">BongoChef</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            
              <Link to="/" className="text-decoration-none  link-dark">Home</Link>
            
            
              <Link to="" className="ms-3 text-decoration-none  link-dark" >Blog</Link>
           
          </Nav>
          {user && <Nav.Link href="#profile">
            <Link to="" className="text-decoration-none  link-dark me-2" >
              <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle></Link>
          </Nav.Link>}
          {user ?
            <Button variant="secondary" className="d-flex justify-content-end text-decoration-none  link-dark ">Log Out </Button> :
            <Link to="/login">
              <Button variant="secondary" className="text-decoration-none d-flex justify-content-end   link-dark">Login </Button>
            </Link>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
export default Header;