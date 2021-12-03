import "../assets/styles/checkout.scss"

function Checkout() {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="col-auto cart-checkout">
          <div className="row px-3">
            <div className="col checkout-subtotal">Subtotal</div>
            <div className="col d-flex justify-content-center checkout-subtotal-valor">R$ 1.560,00</div>
          </div>
          <div className="row p-3">
            <div className="col checkout-total" >Order total</div>
            <div className="col d-flex justify-content-center checkout-total-valor">R$ 1.560,00</div>
          </div>
          <div className="row mx-3 p-3 d-flex justify-content-center checkout-text">
            Check Out with Multiple Addresses
          </div>
          <div className="row checkout-button">
            <button className="btn btn-primary">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;