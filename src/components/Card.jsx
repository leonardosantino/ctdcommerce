import "../assets/styles/card.scss"

function Card({img}) {
    return (
        <>
            <div className="card">
                <img src={img} className="card-img-top" alt="Card img" />
                <div className="card-body">
                    <div className="card-title">Ghost Of Tsushima: Leg...</div>
                    <div className="card-text">SIE / Sucker Punch</div>
                    <div className="card-cat my-2"><span className="consol">PS4</span></div>
                    <div className="card-btn my-2"><a href="#card" className="btn btn-primary">R$ 159.00</a></div>
                </div>
            </div>
        </>
    );
}

export default Card;