import "../assets/styles/cartdescription.scss"
function CartDescription() {
    return (
        <>
            <div className="container-fluid">
                <div className="col-6 cart-description">
                    <div className="row p-2">
                    <div className="col cart-description-product">
                        Product
                    </div>
                    <div className="col d-flex align-items-center cart-price">
                        Price
                    </div>
                    <div className="col d-flex align-items-center cart-quantity">
                        Quantity
                    </div>
                    <div className="col d-flex align-items-center cart-total">
                        Total
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartDescription;