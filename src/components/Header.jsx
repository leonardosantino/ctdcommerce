import "../assets/styles/header.scss"
import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";
import { useCount } from "../context/Count";

import logo from "../assets/imgs/logorobot.png"

function Header() {
  const {count } = useCount();

  return (
    <>
      <Navbar expand={false} className="py-0 my-0">

        <Container fluid className="py-0 my-0">

          <Navbar.Brand as={Link} to="/"  className="logo"><Image src={logo} fluid /></Navbar.Brand>
          <Nav.Link href="#/" className="nav-link d-none d-lg-block"><i className="bi bi-search"></i>&nbsp; SEARCH</Nav.Link>

          <NavLink to="/games" className="text-decoration-none nav-link">GAMES</NavLink>
          <NavLink to="/about" className="text-decoration-none nav-link d-none d-lg-block">ABOUT</NavLink>

          <NavLink to="/cart" className="text-decoration-none nav-link">
            
          <span className="cart-icon">
          {count > 0 &&(<span className="cart-number">{count}</span>)}
          </span>
          &nbsp; CART
          </NavLink>

          <a href="#/" className="nav-link d-none d-lg-block"><i className="bi bi-person-circle"></i>&nbsp; SIGN IN</a>

          <Navbar.Toggle aria-controls="offcanvasNavbar"  className="d-lg-none" />

          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" ><Image src={logo} fluid /></Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end text-center flex-grow-1 pe-3">
              <a href="#/" className="text-decoration-none nav-link navbodylink"><i className="bi bi-search"></i>&nbsp; SEARCH</a>
              <a href="#/" className="text-decoration-none nav-link "><i className="bi bi-person-circle"></i>&nbsp; SIGN IN</a>

              <Link to="/about" className="text-decoration-none nav-link ">ABOUT</Link>

              </Nav>
            </Offcanvas.Body>

          </Navbar.Offcanvas>

        </Container>

      </Navbar>    </>
  );
}
export default Header;