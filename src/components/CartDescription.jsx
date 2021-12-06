import "../assets/styles/cartdescription.scss"
import { Table, Row, Col, Container } from "react-bootstrap";

function CartDescription() {
    return (
        <>
            <Container fluid>
                <Row >
                    <Col >
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan="2">Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>

                    </Col>

                    <Col>
                        <div className="row">
                            <div className="col ">Subtotal</div>
                            <div className="col ">R$ 1.560,00</div>
                        </div>
                        <div className="row">
                            <div className="col " >Order total</div>
                            <div className="col ">R$ 1.560,00</div>
                        </div>
                        <div className="row">
                            Check Out with Multiple Addresses
                        </div>
                        <div className="row ">
                            <button className="btn btn-primary">Proceed to checkout</button>
                        </div>


                    </Col>
                </Row>


            </Container>

        </>
    );
}

export default CartDescription;