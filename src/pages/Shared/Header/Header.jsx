
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
// import './../../Home/Home/Activelink';
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
        <Navbar.Brand href="#home" className="text-success text-dark">ChefVerse Bengal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            
              <Link to="/" className="text-decoration-none  link-dark">Home</Link>
            
             
              <Link to="/blog" className="ms-3 text-decoration-none  link-dark" >Blog</Link>
           
          </Nav>
          {user?.email?<> <Nav.Link href="#profile">
            <Link to="" className="text-decoration-none  link-dark me-2" >
              <FaUserCircle style={{ fontSize: "2rem" }}>{user?.image}</FaUserCircle></Link>
              <span className='text-fuchsia-950 font-bold'>{user?.displayName}</span>
          </Nav.Link>
          
            <Button variant="success" className="d-flex justify-content-end text-decoration-none  " onClick={handleLogOut}>Log Out </Button> 
            </>:
            <Link to="/login">
              <Button variant="success" className="d-flex justify-content-end text-decoration-none  "  >Login </Button>
            </Link>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
export default Header;