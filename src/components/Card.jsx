import "../assets/styles/card.scss"

function Card({img, title, description, console, valor}) {
    return (
        <>
            <div className="card">
                <img src={img} className="card-img-top" alt="Card img" />
                <div className="card-body">
                    <div className="card-title">{title}</div>
                    <div className="card-text">{description}</div>
                    <div className="card-cat my-2"><span className="consol">{console}</span></div>
                    <div className="card-btn my-2"><a href="#card" className="btn btn-primary">R$ {valor}</a></div>
                </div>
            </div>
        </>
    );
}

export default Card;