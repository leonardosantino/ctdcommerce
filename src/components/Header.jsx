import "../assets/styles/header.scss"
import { NavLink } from 'react-router-dom'
import imag from './../assets/imgs/ctdoutrologo.png'
import { useCount } from "../context/Count"

import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  const {count } = useCount()

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <NavLink to="/">
            <img src={imag} alt="Logo site CTD Ecommerce" style={{ width: "4rem" }} />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/games" className="nav-link">Games</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Nav className="d-flex flex-grow-1 justify-content-around flex-row">
            <NavLink to="/search" className="nav-link"><i className="bi bi-search"></i>&nbsp; SEARCH</NavLink>
            <NavLink to="/user" className="nav-link"><i className="bi bi-person-circle"></i>&nbsp; SIGN IN</NavLink>
            <NavLink to="/cart" className="nav-link"><span className="cart-icon">{count > 0 &&(<span className="cart-number">{count}</span>)}</span>&nbsp; Cart
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;