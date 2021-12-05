import "../assets/styles/header.scss"
import { NavLink } from 'react-router-dom'
import imag from './../assets/imgs/ctdoutrologo.png'

import { Navbar, Nav, Container } from 'react-bootstrap'
// import Breadcrumb from 'react-bootstrap/Breadcrumb'

function Header() {
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
            <NavLink to="/cart" className="nav-link">
              <i className="bi bi-bag"></i>&nbsp; Cart
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      {/* {currentlyPath !== "home" && (
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="ms-1"><NavLink to="/">Home</NavLink></Breadcrumb.Item>
          <Breadcrumb.Item active>{currentlyPath}</Breadcrumb.Item>
        </Breadcrumb>
      )} */}
    </>
  );
}
export default Header;