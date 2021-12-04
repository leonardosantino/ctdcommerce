import "../assets/styles/produtodesc.scss"

function ProductDesc({img, title, description, valor}) {
  return (
    <>
      <div className="container-fluid product">

        <div className="row">

        <div className="col product-img">
          <img className="img-fluid" src={img} alt="img description" />
        </div>

        <div className="col text-center">
          <div className="product-title">{title}</div>

          <div className="precoDE">{description}</div>

          <div className="precoPOR">{valor}</div>

          <div className="">
            <a href="#product" className="btn btn-primary"><i className="bi bi-bag"></i> Add to cart</a>
          </div>
        </div>
        </div>
      </div>

      <div className="details mt-5">
        <div className="detail-title">Details</div>
        <hr />
        <div>
          <div className="detail-text">{description}</div>
        </div>
      </div>

    </>
  );
}

export default ProductDesc;