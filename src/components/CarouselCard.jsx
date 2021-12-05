import "../assets/styles/carouselcard.scss"
import Card from "./Card";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const imgCard7 = "images/games/imgGame7.png"
const imgCard8 = "images/games/imgGame8.png"
const imgCard9 = "images/games/imgGame9.png"
const imgCard10 = "images/games/imgGame10.png"
const imgCard11 = "images/games/imgGame11.png"
const imgCard12 = "images/games/imgGame12.png"

function CarouselCard() {
  return (
    <>
      <div className="carousel-tile px-5 my-5">
        New releases
        <hr />
      </div>

<<<<<<< HEAD
      <div className="carouselsection">
        <div id="carouselCard" className="carousel slide" data-bs-ride="carouselCard">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-evenly">
                <Card img={imgCard7} title={"Watch Dogs Legion"} description={"Ubisoft"} console={"PS4"} valor={89.90} id={7}/>
                <Card img={imgCard8} title={"Cloudpunk"} description={"Maple Whispering / Ion Lands"} console={"XBOX"} valor={109.90} id={8}/>
                <Card img={imgCard9} title={"Crysis Remastered"} description={"Crytek"} console={"PS4"} valor={79.90} id={9}/>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-evenly">
              <Card img={imgCard10} title={"Far Cry 6"} description={"Ubisoft"} console={"XBOX"} valor={129.90} id={10}/>
              <Card img={imgCard11} title={"This Is The Zodiac Spea..."} description={"Klabater / Punch Punk Games"} console={"PS4"} valor={109.90} id={11}/>
              <Card img={imgCard12} title={"NBA 2K21"} description={"2K Sports / Visual Concepts"} console={"XBOX"} valor={129.90} id={12}/>
              </div>
            </div>
=======
      <Carousel>
        <Carousel.Item interval={1500}>
          <div className="d-flex justify-content-evenly">
            <Card img={imgCard7} title={"Watch Dogs Legion"} description={"Ubisoft"} console={"PS4"} valor={89.90} id={1} />
            <Card img={imgCard8} title={"Cloudpunk"} description={"Maple Whispering / Ion Lands"} console={"XBOX"} valor={109.90} id={2} />
            <Card img={imgCard9} title={"Crysis Remastered"} description={"Crytek"} console={"PS4"} valor={79.90} id={3} />
>>>>>>> 95c0203858bd33fe5b00b59cedce174fa9648972
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-evenly">
            <Card img={imgCard10} title={"Far Cry 6"} description={"Ubisoft"} console={"XBOX"} valor={129.90} id={4} />
            <Card img={imgCard11} title={"This Is The Zodiac Spea..."} description={"Klabater / Punch Punk Games"} console={"PS4"} valor={109.90} id={5} />
            <Card img={imgCard12} title={"NBA 2K21"} description={"2K Sports / Visual Concepts"} console={"XBOX"} valor={129.90} id={6} />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselCard;