import "../assets/styles/carouselcard.scss"
import Cards from "./Cards";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Carousel, Row, Col } from 'react-bootstrap';

const imgCard7 = "images/games/imgGame7.png"
const imgCard8 = "images/games/imgGame8.png"
const imgCard9 = "images/games/imgGame9.png"
const imgCard10 = "images/games/imgGame10.png"
const imgCard11 = "images/games/imgGame11.png"
const imgCard12 = "images/games/imgGame12.png"

function CarouselCard() {

  useEffect(() => {
    return;
  }, []);
  
  return (
    <>
      <Container fluid>

        <Row>
          <Col className="carousel-title">
            New releases
            <hr />
          </Col>
        </Row>
        <Row>

        <Carousel indicators={false}>
          <Carousel.Item interval={1500}>
            <Row className="d-flex justify-content-evenly gap-1">
              <Col xs="auto">
                <Cards img={imgCard7} title={"Watch Dogs Legion"} description={"Ubisoft"} console={"PS4"} valor={89.90} id={7} />
              </Col>
              <Col xs="auto py-1">
                <Cards img={imgCard8} title={"Cloudpunk"} description={"Maple Whispering / Ion Lands"} console={"PS5"} valor={109.90} id={8} />
              </Col>
              <Col xs="auto">
                <Cards img={imgCard9} title={"Crysis Remastered"} description={"Crytek"} console={"PS4"} valor={79.90} id={9} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="d-flex justify-content-evenly gap-1 ">
              <Col xs="auto">
                <Cards img={imgCard10} title={"Far Cry 6"} description={"Ubisoft"} console={"PS5"} valor={129.90} id={10} />
              </Col>
              <Col xs="auto py-1">
                <Cards img={imgCard11} title={"This Is The Zodiac"} description={"Klabater / Punch Punk Games"} console={"PS4"} valor={109.90} id={11} />
              </Col>
              <Col xs="auto">
                <Cards img={imgCard12} title={"NBA 2K21"} description={"2K Sports / Visual Concepts"} console={"PS5"} valor={129.90} id={12} />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        </Row>
      </Container>
    </>
  );
}

export default CarouselCard;