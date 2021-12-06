import "../assets/styles/produtodescription.scss"

import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import {Helmet} from "react-helmet";

function ProductDescription({ img, title, description, valor }) {
  return (
    <>
      <Helmet>
        <title>CTD Ecommerce | {title}</title>
      </Helmet>
      <Container fluid className="product-description">

        <Row>

          <Col sm={12} lg={6} className="text-center text-lg-start">
            <Image src={img} fluid />
          </Col>

          <Col sm={12} lg={6} className="text-center" >

            <Row>

              <Col className="py-2 product-description-title">
                {title}
              </Col>

            </Row>
            <Row >
              <Col className="py-2 product-description-description">
                {description}
              </Col>

            </Row>
            <Row >
              <Col className="py-2 product-description-valor">
                R$ {valor}
              </Col>
            </Row>

            <Row >

              <Col className="py-3">
                <Button>
                  <i className="bi bi-bag"></i> Add to cart
                </Button>
              </Col>

            </Row>
          </Col>

        </Row>

        <Row>

          <Row >
            <Col className="py-2 product-description-details">
            Details
            </Col>
            
          </Row>
          <Row>
            <Col className="py-2 product-description-text">
            {description}
            </Col>
            
          </Row>

        </Row>

      </Container>
    </>
  );
}

export default ProductDescription;