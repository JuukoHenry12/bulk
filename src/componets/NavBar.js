import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logo-min.png";
//import { LinkContainer } from "react-router-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Navbar.Brand href="#home">
      BULK SMS SOLUTION's
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link smooth to="#productdescription">
            <Nav.Link active>Product Description</Nav.Link>
          </Link>
          <Link smooth to="#about">
            <Nav.Link>About us</Nav.Link>
          </Link>
          <Link smooth to="#product">
            <Nav.Link>Product Features</Nav.Link>
          </Link>
          <Link smooth to="#pricing">
            <Nav.Link>Pricing</Nav.Link>
          </Link>

          <Link smooth to="#contact">
            <Nav.Link>Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
