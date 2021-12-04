import "../assets/styles/categorie.scss"

function Categorie({children}) {
  return (
    <>
      <div className="d-flex">
      <div className="col-auto me-5">
        <div className="flex-shrink-0 p-3 bg-white side-bar ms-5 text-center">
          <span className="d-flex align-items-center  pb-3 mb-3 link-dark text-decoration-none border-bottom">
          Genre

          </span>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                ACTION
              </button>
              <div className="collapse" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small align-items-center">
                  <li><a href="#1" className="link-dark rounded">All</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                SHOOTER
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#1" className="link-dark rounded">All</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                SPORTS
              </button>
              <div className="collapse" id="orders-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#1" className="link-dark rounded">All</a></li>
                </ul>
              </div>
            </li>
            <li className="border-top my-3"></li>
          </ul>
        </div>
      </div>
      <div className="col d-flex flex-wrap gap-3">
        {children}
      </div>
      </div>
    </>
  );
}

export default Categorie;



