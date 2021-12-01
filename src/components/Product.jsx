import imgDescription from "../assets/imgs/imgDescription.png"
import imgAddCart from "../assets/imgs/imgAddCart.png"
import "../assets/styles/produto.scss"

function Product() {
  return (
    <>
      <div className="d-flex product">
        <div className="product-img">
          <img className="img-fluid" src={imgDescription} alt="" />
        </div>
        <div className="text-center">
          <div class="product-title">WAY KAMBAS MINI EBONY</div>

          <div class="precoDE mt-5">R$ 1.264.00</div>

          <div class="precoPOR mt-5">R$ 500.00</div>

          <div className="mt-5">
            <a href="#product" class="btn btn-primary"><img className="img-fluid" src={imgAddCart} alt="" /> Add to cart</a>
          </div>

        </div>
      </div>
      <div className="details mt-5">
        <div className="detail-title">Details</div>
        <hr />
        <div>
          <div className="detail-text">MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</div>
        </div>
      </div>
    </>
  );
}

export default Product;