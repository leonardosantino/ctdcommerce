import "../assets/styles/header.scss"
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function Header({ currentlyPath }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" aria-label="Main navigation">

        <div className="container-fluid">

          <Link to="/" className="navbar-brand">CTD Commerce</Link>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">

              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
                <li className="nav-item me-lg-3">
                  <Link to="/PS5" className="nav-link">Playstation</Link>
                </li>
                <li className="nav-item ms-lg-3 me-lg-5">
                  <Link to="/xbox" className="nav-link">Xbox</Link>
                </li>
                <li className="nav-item ms-lg-5">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-grow-1 justify-content-around">
            <div>
              <a className="link-secondary text-decoration-none" href="#search" aria-label="Search"><i className="bi bi-search"></i>&nbsp; SEARCH</a>
            </div>
            <div>
              <a className="link-secondary text-decoration-none" href="#user" aria-label="User"><i className="bi bi-person-circle"></i>&nbsp; SIGN IN</a>
            </div>
            <div>
              <a className="link-secondary" href="#cart" aria-label="Car"><i className="bi bi-bag"></i></a>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      {currentlyPath !== "home" && (
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="ms-5"><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>{currentlyPath}</Breadcrumb.Item>
        </Breadcrumb>
      )}
    </>
  );
}
export default Header;