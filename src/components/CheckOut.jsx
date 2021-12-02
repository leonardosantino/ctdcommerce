import CardCart from "../components/CardCart";
import "../assets/styles/checkout.scss"

function CheckOut() {
    return (
        <>
            <div className="container-fluid">
                <div className="checkout">
                    <div className="row justify-content-center checkout-cards">
                        <CardCart />
                        <CardCart />
                    </div>
                    <div className="row">
                        <div className="row justify-content-end p-3 checkout-total">Valor Total: R$ 1.500,00</div>
                        <div className="row justify-content-center p-3 checkout-btn"><button className="btn btn-primary">Checkout</button></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckOut;