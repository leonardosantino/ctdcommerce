import "../assets/styles/header.scss"
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";
import { useCount } from "../context/Count";
import logo from "../assets/imgs/logorobot.png"

function Header() {
  const {count } = useCount();

  return (
    <>
      <Navbar bg="dark" expand={false} className="py-0 my-0">

        <Container fluid className="py-0 my-0">

          <Navbar.Brand as={Link} to="/"  className="logo"><Image src={logo} fluid /></Navbar.Brand>
          <a href="#/" className="nav-link d-none d-lg-block"><i className="bi bi-search"></i>&nbsp; SEARCH</a>

          <Link to="/games" className="text-decoration-none nav-link">GAMES</Link>
          <Link to="/about" className="text-decoration-none nav-link d-none d-lg-block">ABOUT</Link>

          <Link to="/cart" className="text-decoration-none nav-link">
            
          <span className="cart-icon">
          {count > 0 &&(<span className="cart-number">{count}</span>)}
          </span>
          &nbsp; CART
          </Link>

          <a href="#/" className="nav-link d-none d-lg-block"><i className="bi bi-person-circle"></i>&nbsp; SIGN IN</a>

          <Navbar.Toggle aria-controls="offcanvasNavbar" className="d-lg-none" />

          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">CTD GAMES</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end text-center flex-grow-1 pe-3">
              <a href="#/" className="text-decoration-none nav-link "><i className="bi bi-search"></i>&nbsp; SEARCH</a>
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