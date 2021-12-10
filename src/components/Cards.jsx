import "../assets/styles/card.scss";
import { Link } from "react-router-dom";
import { useCount } from "../context/Count";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { addToCart } from "../context/Count";

function Cards({ img, title, description, console, valor, id, category }) {
  const { product, setProduct } = useCount();

  useEffect(() => {
    return;
  }, []);

  function handleClick() {
    addToCart(product, setProduct, id, img, title, description, valor);
  }

  return (
    <>
      <Card className="card">

        <Link className="card-title text-decoration-none" to={`/games/${category}/${id}`} ><Card.Img variant="top" src={img} alt={title} /></Link>
        <Card.Body className="card-body p-0 m-0">
          <Card.Title>
            <Link className="card-title text-decoration-none ps-1" to={`/games/${category}/${id}`} > {title} </Link>
          </Card.Title>
          <Card.Text className="card-text ps-1">{description}</Card.Text>
          <div className="card-cat my-2 ">
            <span className="consol ms-1">{console}</span>
          </div>
          <div className="card-btn mt-3">
            <Button onClick={handleClick} variant="primary">
              <i className="bi bi-bag"></i>&nbsp; R${" "}
              {valor.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
