import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <div className = "nav-bar">
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/">Movie Index</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"> Home </Link>
            <Link to="/movies"> Movie List </Link>
            <Link to="/movies/movieform"> Add Movie </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        
  );
};
export default NavBar;

