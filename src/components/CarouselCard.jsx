import "../assets/styles/carouselcard.scss"
import imgClock1 from "../assets/imgs/watches/imgClock1.png"
import imgClock2 from "../assets/imgs/watches/imgClock2.png"
import imgClock3 from "../assets/imgs/watches/imgClock3.png"
import imgClock4 from "../assets/imgs/watches/imgClock4.png"

import Card from "./Card";

function CarouselCard() {
  return (
    <>
      <div className="carouselCard px-5 mb-5">
        New products
        <hr />
      </div>
      <div className="carouselsection  ps-5">
        <div id="carouselCard" class="carousel slide" data-bs-ride="carouselCard">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="d-flex justify-content-evenly">
                <Card img={imgClock1} /> <Card img={imgClock2} /> <Card img={imgClock3} />
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex justify-content-evenly">
                <Card img={imgClock4}/> <Card img={imgClock1}/> <Card  img={imgClock2}/>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselCard" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselCard" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselCard;