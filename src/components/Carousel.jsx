import imgCarousel1 from "../assets/imgs/imgHomemAranha.png"
import imgCarousel2 from "../assets/imgs/imgAssassinsCreed.png"
import "../assets/styles/carousel.scss"

function Carousel() {
  return (
    <> <div className="carouselsection">
      <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imgCarousel1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgCarousel2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </>
  );
}

export default Carousel;