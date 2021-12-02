import "../assets/styles/card.scss"

function Card({img}) {
    return (
        <>
            <div class="card">

                <img src={img} class="card-img-top" alt="..." />

                <div class="card-body">
                    <div class="card-title">Ghost Of Tsushima: Leg...</div>
                    <div className="card-text">SIE / Sucker Punch</div>
                    <div className="card-cat my-2"><span className="consol">PS4</span></div>
                    <div className="card-btn my-2"><a href="#card" class="btn btn-primary">R$ 159.00</a></div>
                    
                </div>
            </div>
        </>
    );
}

export default Card;