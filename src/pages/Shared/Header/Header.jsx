
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

import Activelink from '../../Home/Home/Activelink/Activelink';
const Header = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut=()=>{
     logOut()
     .then()
     .catch(error=>console.log(error));
    }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-dark">BongoChef</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            
            <Activelink to="/" className="text-decoration-none  link-dark">Home</Activelink>
            
             
              <Activelink to="/blog" className="ms-3 text-decoration-none  link-dark" >Blog</Activelink>
           
          </Nav>
          {user?.email?<> <Nav.Link href="#profile">
            <Activelink to="" className="text-decoration-none  link-dark me-2" >
              <FaUserCircle style={{ fontSize: "2rem" }}>{user?.image}</FaUserCircle></Activelink>
              <span className='text-fuchsia-950 font-bold'>{user?.displayName}</span>
          </Nav.Link>
          
            <Button variant="success" className="d-flex justify-content-end text-decoration-none  " onClick={handleLogOut}>Log Out </Button> 
            </>:
            <Activelink to="/login">
              <Button variant="success" className="d-flex justify-content-end text-decoration-none  "  >Login </Button>
            </Activelink>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
export default Header;