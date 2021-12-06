import "../assets/styles/card.scss"
import { NavLink } from "react-router-dom";
import { UseCount } from "../context/Count";
import { useEffect } from "react";


function Card({ img, title, description, console, valor, id }) {
    const { count, setCount } = UseCount();

    useEffect(() => {

        return
    }, [])
    return (
        <>
            <div className="card">
                <img src={img} className="card-img-top" alt="Card img" />
                <div className="card-body">
                    <div className="card-title"><NavLink className="card-title text-decoration-none" to={`/games/${id}`} >{title}</NavLink>  </div>
                    <div className="card-text">{description}</div>
                    <div className="card-cat my-2"><span className="consol">{console}</span></div>
                    <div className="card-btn my-2"><button onClick={() => setCount(count + 1)} className="btn btn-primary"><i className="bi bi-bag"></i>&nbsp; R$ {valor.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</button></div>
                </div>
            </div>
        </>
    );
}

export default Card;