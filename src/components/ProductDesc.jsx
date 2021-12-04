import "../assets/styles/produtodesc.scss"
const imgDescription = "images/games/imgGame1.png"

function ProductDesc() {
  return (
    <>
      <div className="container-fluid product">

        <div className="row">

        <div className="col product-img">
          <img className="img-fluid" src={imgDescription} alt="" />
        </div>

        <div className="col text-center">
          <div class="product-title">WAY KAMBAS MINI EBONY</div>

          <div class="precoDE">Web Games / CD project Red</div>

          <div class="precoPOR">R$ 500.00</div>

          <div className="">
            <a href="#product" class="btn btn-primary"><i className="bi bi-bag"></i> Add to cart</a>
          </div>
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

export default ProductDesc;