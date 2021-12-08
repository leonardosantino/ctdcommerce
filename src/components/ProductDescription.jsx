import "../assets/styles/produtodescription.scss";
import { useEffect } from "react";
import { useCount } from "../context/Count";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { addToCart } from "../context/Count";
import { Helmet } from "react-helmet-async";

function ProductDescription({ img, title, description, valor, id, sinopse }) {
  const { product, setProduct } = useCount();

  useEffect(() => {
    return;
  }, []);

  function handleClick() {
    addToCart(product, setProduct, id, img, title, description, valor);
  }

  return (
    <>
      <Helmet>
        <title>CTD GAMES | {title}</title>
      </Helmet>
      <Container fluid className="product-description">
        <Row>
          <Col sm={12} lg={6} className="text-center text-lg-start">
            <Image src={img} fluid />
          </Col>

          <Col sm={12} lg={6} className="text-center">
            <Row>
              <Col className="py-2 product-description-title">{title}</Col>
            </Row>
            <Row>
              <Col className="py-2 product-description-description">
                {description}
              </Col>
            </Row>
            <Row>
              <Col className="py-2 product-description-valor">R$ {valor.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</Col>
            </Row>

            <Row>
              <Col className="py-3 card-btn">
                <Button onClick={handleClick}>
                  <i className="bi bi-bag"></i> Add to cart
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Row>
            <Col className="py-2 product-description-details">Details</Col>
          </Row>
          <Row>
            <Col className="py-2 product-description-text">{sinopse}</Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default ProductDescription;
