import "../assets/styles/card.scss"
import {NavLink} from "react-router-dom";
import {UseCount} from "../context/Count";
import {useEffect} from "react";
import {Button, Card} from "react-bootstrap";


function Cards({img, title, description, console, valor, id}) {
    const {count, setCount} = UseCount();

    useEffect(() => {

        return
    }, [])
    return (
        <>
            <Card className="card">
                <Card.Img variant="top" src={img} alt={title}/>
                <Card.Body className="card-body">
                    <Card.Title>
                        <NavLink className="card-title text-decoration-none" to={`/games/${id}`}>{title}</NavLink>
                    </Card.Title>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <div className="card-cat my-2"><span className="consol">{console}</span></div>
                    <div className="card-btn my-2">
                        <Button onClick={() => setCount(count + 1)} variant="primary">
                            <i className="bi bi-bag"></i>
                            &nbsp; R$ {valor.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cards;