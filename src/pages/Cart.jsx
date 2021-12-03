import Header from "../components/Header"
import CartProduct from "../components/CartProduct";
import CartDescription from "../components/CartDescription";
import "../assets/styles/cart.scss"
import Checkout from "../components/Checkout";

function Cart() {
  return (
    <>
      <Header currentlyPath="cart" />
      <div className="cart-home">
        <div className="d-flex justify-content-center p-3 cart-home-text">Shopping Cart</div>
        <CartDescription />
        <div className="d-flex flex-wrap">

          <div className="col">
            <CartProduct />
            <CartProduct />
          </div>

          <div className="col">
            <Checkout/>

          </div>
          
        </div>
      </div>
    </>
  );
}

export default Cart;