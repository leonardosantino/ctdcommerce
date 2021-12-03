import "../assets/styles/cardCart.scss"

const imgGame1 = "images/games/imgGame1.png"

function CardCart() {
    return (
        <>
            <div class="card-cart">
                <div class="row">
                    <div class="col-auto">
                        <img src={imgGame1} class="img-fluid" alt="..." />
                    </div>
                    <div class="col-auto">
                        <div>
                            <h5>Ghost Of Tsushima: Leg...</h5>
                            <p>WB Games / CD Project Red</p>
                        </div>
                    </div>
                    <div class="col d-flex align-items-end justify-content-end mb-2">
                        <div className="col-auto d-flex justify-content-center card-price">R$ 1.580,00</div>
                        <div className="col-auto d-flex justify-content-center "><button className="btn card-trash"><i class="bi bi-trash"></i></button></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardCart;