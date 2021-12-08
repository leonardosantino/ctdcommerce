import imgCarousel1 from "../assets/imgs/imgHomemAranha.png"
import imgCarousel2 from "../assets/imgs/imgAssassinsCreed.png"
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

function CarouselHome() {
  return (
    <>
      <Carousel fade indicators={false}>
        <Carousel.Item>
          <img src={imgCarousel1} className="d-block w-100" alt="Homem Aranha" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgCarousel2} className="d-block w-100" alt="Assassins Creed" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselHome;