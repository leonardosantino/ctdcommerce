import "../assets/styles/cart.scss"
import { Table, Row, Col, Container, Button } from "react-bootstrap";
import CartProduct from "../components/CartProduct";
import Header from "../components/Header"
import {Helmet} from "react-helmet";

function Cart() {
  return (
    <>
      <Helmet>
        <title>CTD Ecommerce | Cart </title>
      </Helmet>
      <Header />
      <main className="cart">
        <Container fluid>
          <Row >
            <Col sm={12} lg={6}>
              <Table responsive="sm" borderless className="cart-product" >
                <thead>
                  <tr>
                    <th colSpan="2">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <CartProduct />
                  <CartProduct />
                </tbody>
              </Table>

            </Col>
            <Col sm={12} lg={6}>
              <Table borderless className="cart-checkout">
                <thead>
                  <tr>
                    <th colSpan="2" className="text-center">Checkount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th  >Subtotal</th>
                    <th className="text-end">R$ 119,90</th>
                  </tr>
                  <tr>
                    <th >Total</th>
                    <th className="text-end">R$ 119,90</th>
                  </tr>
                  <tr >
                    <th colSpan="2" className="text-center checkount-col-check">Check Out with Multiple Addresses</th>
                  </tr>
                  <tr>
                    <th colSpan="2" className="text-center checkout-col-button"><Button variant="primary" size="lg" className="checkout-button bg-transparent"> Proceed to checkout</Button></th>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Cart;