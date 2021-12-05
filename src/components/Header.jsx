import "../assets/styles/header.scss"
import { NavLink } from 'react-router-dom'
import imag from './../assets/imgs/ctdoutrologo.png'
import { UseCount } from "../context/Count";

function Header() {
  const {count } = UseCount()

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Main navigation">

        <div className="container-fluid">

          <NavLink to="/" className="navbar-brand flex-grow-1">
            <img src={imag} alt="" style={{width: "4rem"}}/>
          </NavLink>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">

              <ul className="navbar-nav justify-content-around align-items-center flex-grow-1">
                <li className="nav-item">
                  <NavLink to="/games" className="nav-link">Games</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About</NavLink>
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
              <NavLink to="/cart" className="link-secondary text-decoration-none"><span className="cart-icon">{count > 0 &&(<span className="cart-number">{count}</span>)}</span>&nbsp; Cart</NavLink>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
export default Header;