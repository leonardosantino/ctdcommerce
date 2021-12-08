import "../assets/styles/cart.scss";
import cartempaty from "../assets/imgs/empty-cart.png"
import { Table, Row, Col, Container, Button, Image } from "react-bootstrap";
import CartProduct from "../components/CartProduct";
import Header from "../components/Header";
import { useCount } from "../context/Count";
import { Helmet } from "react-helmet-async";

function Cart() {
  const { product } = useCount();

  const total = product.reduce((valor, item) => {
    if (item.quantity > 1) {
      return valor + item.quantity * item.valorproduct;
    } else {
      return valor + item.valorproduct;
    }
  }, 0);

  return (
    <>
      <Helmet>
        <title>CTD GAMES | Cart </title>
      </Helmet>
      <Header />
      <main className="cart">
        <Container fluid>
          <Row>
            <Col sm={12} lg={6}>
              <Table responsive="sm" borderless className="cart-product">
                <thead>
                  <tr>
                    <th colSpan="2">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    {/* <th>Total</th> */}
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  {!product.length && (
                    <tr >
                      <th colSpan="5" className="cart-text-normal text-center py-5">
                        <Image src={cartempaty} fluid />
                      </th>
                    </tr>
                  )}

                  {product.map((item, index) => {
                    return (
                      <tr key={index}>
                        <CartProduct
                          img={item.imgproduct}
                          description={
                            item.titleproduct + " " + item.descriptionproduct
                          }
                          valor={item.valorproduct}
                          quantity={item.quantity}
                          idproduct={item.idproduct}
                          isLiked={item.isLiked}
                        />
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col sm={12} lg={6}>
              <Table borderless className="cart-checkout">
                <thead>
                  <tr>
                    <th colSpan="2" className="text-center">
                      Checkount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Total</th>
                    <th className="text-end">R$ {total.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}</th>
                  </tr>
                  <tr>
                    <th colSpan="2" className="text-center checkount-col-check">
                      Check Out with Multiple Addresses
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="2" className="text-center checkout-col-button">
                      <Button
                        variant="primary"
                        size="lg"
                        className="checkout-button bg-transparent"
                      >
                        Proceed to checkout
                      </Button>
                    </th>
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
