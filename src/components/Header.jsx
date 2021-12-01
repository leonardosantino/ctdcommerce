import "../assets/styles/header.scss"
import imgCart from "../assets/imgs/imgCart.png"
import imgSearch from "../assets/imgs/imgSearch.png"
import imgUser from "../assets/imgs/imgUser.png"
import imgCtd from "../assets/imgs/imgCtd.png"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" aria-label="Main navigation">

      <div className="container-fluid px-5">

        <a className="navbar-brand" href="#logo"><img src={imgCtd} alt="" /></a>


        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

          <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">

            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
              <li className="nav-item me-lg-3">
                <a className="nav-link " aria-current="page" href="#about">Watches</a>
              </li>
              <li className="nav-item ms-lg-3 me-lg-5">
                <a className="nav-link" href="#learning">Eyewear</a>
              </li>
              <li className="nav-item ms-lg-5">
                <a className="nav-link" href="#learning">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-grow-1 justify-content-around">
          <div>
            <a class="link-secondary" href="#search" aria-label="Search"><img src={imgSearch} alt="" /></a>
          </div>
          <div>
            <a class="link-secondary" href="#user" aria-label="User"><img src={imgUser} alt="" /></a>
          </div>
          <div>
            <a className="link-secondary" href="#cart" aria-label="Car"><img src={imgCart} alt="" /></a>
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
export default Header;