import "../assets/styles/card.scss"
import imgAddCart from "../assets/imgs/imgAddCart.png"

function Card({img}) {
    return (
        <>
            <div class="card">

                <img src={img} class="card-img-top" alt="..." />

                <div class="card-body">

                    <div class="card-title">Singo Maple</div>

                    <div class="card-text">20% Off</div>

                    <div class="precoDE">R$ 1.264.00</div>

                    <div class="precoPOR">R$ 500.00</div>

                    <a href="#card" class="btn btn-primary"><img src={imgAddCart} alt="" /> Add to cart</a>

                </div>
            </div>
        </>
    );
}

export default Card;