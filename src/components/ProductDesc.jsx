import "../assets/styles/produtodesc.scss"

import { Container, Row, Col } from 'react-bootstrap'

function ProductDesc({ img, title, description, valor }) {
  return (
    <>
      <Container className="product">
        <Row>
          <Col className="product-img">
            <img className="img-fluid" src={img} alt="img description" />
          </Col>

          <Col className="text-center">
            <div className="product-title">{title}</div>

            <div className="precoDE">{description}</div>

            <div className="precoPOR">{valor}</div>

            <div className="">
              <a href="#product" className="btn btn-primary"><i className="bi bi-bag"></i> Add to cart</a>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="details mt-5">
        <div className="detail-title">Details</div>
        <hr />
        <div>
          <div className="detail-text">{description}</div>
        </div>
      </div>

    </>
  );
}

export default ProductDesc;