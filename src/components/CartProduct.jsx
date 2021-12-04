import "../assets/styles/cartproduct.scss"
const imgGame20 = "images/games/imgGame20.png"

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
            <input type="number" name="cart-quantity" id="cart-quantity" min="1" defaultValue="2" />
          </div>

          <div className="col d-flex align-items-center cart-total">
            R$ 1.250.56
          </div>

          <div className="col d-flex align-items-center justify-content-around">
            <i className="bi bi-heart btn"></i><i className="bi bi-pencil-square btn"></i> <i className="bi bi-x-square btn"></i>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}

export default CartProduct;