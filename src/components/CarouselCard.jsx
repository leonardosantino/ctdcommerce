import "../assets/styles/carouselcard.scss"
//import Card from "./Card";

function CarouselCard() {
  return (
    <>
      <div className="carousel-tile px-5">
        New products
        <hr />
      </div>

      <div className="carouselsection">
        <div id="carouselCard" className="carousel slide" data-bs-ride="carouselCard">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-evenly">

                {/* <Card /> */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-evenly">
                {/* <Card  /> */}
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselCard" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselCard" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselCard;