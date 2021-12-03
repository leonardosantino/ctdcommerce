import "../assets/styles/cartproduct.scss"
import imgGame20 from "../assets/imgs/games/imgGame20.png"

function CartProduct() {
  return (
    <>
      <div className="container-fluid cart-product">
      <div className="col">
        <div className="row p-2">

          <div className="col">
            <img className="img-fluid" src={imgGame20} alt="cart img" />
          </div>

          <div className="col cart-text">
            Days Gone <br /> SIE Bend Studio
          </div>

          <div className="col d-flex align-items-center cart-price">
            R$ 1.250.56
          </div>

          <div className="col d-flex align-items-center cart-quantity">
            <input type="number" name="cart-quantity" id="cart-quantity" min="1" value="2" />
          </div>

          <div className="col d-flex align-items-center cart-total">
            R$ 1.250.56
          </div>

          <div className="col d-flex align-items-center justify-content-around">
            <i class="bi bi-heart btn"></i><i class="bi bi-pencil-square btn"></i> <i class="bi bi-x-square btn"></i>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}

export default CartProduct;