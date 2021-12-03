import "../assets/styles/categorie.scss"
import Card from "../components/Card"

function Categorie() {
  return (
    <>
      <div className="d-flex">
      <div className="col-auto me-5">
        <div class="flex-shrink-0 p-3 bg-white side-bar ms-5">
          <span class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            FILTER BY

          </span>
          <ul class="list-unstyled ps-0">
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                Brand
              </button>
              <div class="collapse" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small align-items-center">
                  <li><a href="#1" class="link-dark rounded">Color</a></li>
                  <li><a href="#1" class="link-dark rounded">Updates</a></li>
                  <li><a href="#1" class="link-dark rounded">Reports</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                Color
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#1" class="link-dark rounded">Overview</a></li>
                  <li><a href="#1" class="link-dark rounded">Weekly</a></li>
                  <li><a href="#1" class="link-dark rounded">Monthly</a></li>
                  <li><a href="#1" class="link-dark rounded">Annually</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                Size
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#1" class="link-dark rounded">New</a></li>
                  <li><a href="#1" class="link-dark rounded">Processed</a></li>
                  <li><a href="#1" class="link-dark rounded">Shipped</a></li>
                  <li><a href="#1" class="link-dark rounded">Returned</a></li>
                </ul>
              </div>
            </li>
            <li class="border-top my-3"></li>
          </ul>
        </div>
      </div>
      <div className="col d-flex flex-wrap gap-3">
        <Card/>
      </div>
      </div>
    </>
  );
}

export default Categorie;



