import imgCarousel1 from "../assets/imgs/imgCarousel1.png"
import imgCarousel2 from "../assets/imgs/imgCarousel2.png"
import "../assets/styles/carousel.scss"

function Carousel() {
  return (
    <> <div className="carouselsection  ps-5">
      <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imgCarousel1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imgCarousel2} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </>
  );
}

export default Carousel;