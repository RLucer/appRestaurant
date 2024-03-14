
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function NavbarMenu() {
  return (
    <Navbar expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand as={Link} to="/">  <img
              src="./src/assets/image/logo2.jpg"
              width="180"
              height="180"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> </Navbar.Brand>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/About">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/Food">MENU</Nav.Link>
            <Nav.Link as={Link} to="/Reserve">RESERVATIONS</Nav.Link>
            <Nav.Link as={Link} to="/Contact">CONTACT </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Food">Oun Letter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Reserve">Book with us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Contact">
               Contact
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;