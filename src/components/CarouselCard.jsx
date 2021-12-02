import "../assets/styles/carouselcard.scss"
import imgGame1 from "../assets/imgs/games/imgGame1.png"
import imgGame2 from "../assets/imgs/games/imgGame2.png"
import imgGame3 from "../assets/imgs/games/imgGame3.png"
import imgGame4 from "../assets/imgs/games/imgGame4.png"
import imgGame5 from "../assets/imgs/games/imgGame5.png"
import imgGame6 from "../assets/imgs/games/imgGame6.png"



import Card from "./Card";

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
                <Card img={imgGame1} /> <Card img={imgGame2} /> <Card img={imgGame3} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-evenly">
                <Card img={imgGame4} /> <Card img={imgGame5} /> <Card img={imgGame6} />
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