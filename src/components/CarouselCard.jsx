import "../assets/styles/carouselcard.scss"
import Card from "./Card";

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Carousel, Row, Col } from 'react-bootstrap';

const imgCard7 = "images/games/imgGame7.png"
const imgCard8 = "images/games/imgGame8.png"
const imgCard9 = "images/games/imgGame9.png"
const imgCard10 = "images/games/imgGame10.png"
const imgCard11 = "images/games/imgGame11.png"
const imgCard12 = "images/games/imgGame12.png"

function CarouselCard() {
  return (
    <>
      <Container fluid>

        <Container>
          <div className="carousel-title mt-5">
            New releases
            <hr />
          </div>
        </Container>

        <Carousel indicators={false}>
          <Carousel.Item interval={1500}>
            <Row className="justify-content-evenly">
              <Col md={3} sm={6} className="d-flex justify-content-center py-2">
                <Card img={imgCard7} title={"Watch Dogs Legion"} description={"Ubisoft"} console={"PS4"} valor={89.90} id={1} />
              </Col>
              <Col md={3} sm={6} className="d-flex justify-content-center py-2">
                <Card img={imgCard8} title={"Cloudpunk"} description={"Maple Whispering / Ion Lands"} console={"XBOX"} valor={109.90} id={2} />
              </Col>
              <Col md={3} sm={6} className="d-flex justify-content-center py-2">
                <Card img={imgCard9} title={"Crysis Remastered"} description={"Crytek"} console={"PS4"} valor={79.90} id={3} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-evenly">
              <Col md={3} sm={6} className="d-flex justify-content-center py-2">
                <Card img={imgCard10} title={"Far Cry 6"} description={"Ubisoft"} console={"XBOX"} valor={129.90} id={4} />
              </Col>
              <Col md={3} sm={6} className="d-flex justify-content-center py-2">
                <Card img={imgCard11} title={"This Is The Zodiac Spea..."} description={"Klabater / Punch Punk Games"} console={"PS4"} valor={109.90} id={5} />
              </Col>
              <Col md={3} sm={6} className="d-flex justify-content-center py-2">
                <Card img={imgCard12} title={"NBA 2K21"} description={"2K Sports / Visual Concepts"} console={"XBOX"} valor={129.90} id={6} />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default CarouselCard;