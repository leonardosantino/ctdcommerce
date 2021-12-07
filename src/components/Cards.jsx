import "../assets/styles/card.scss"
import {NavLink} from "react-router-dom";
import {useCount} from "../context/Count";
import {useEffect} from "react";
import {Button, Card} from "react-bootstrap";

function Cards({img, title, description, console, valor, id}) {
    const {count, product, setProduct} = useCount();

    useEffect(() => {

        return
    }, [])

    function addToCart() {

        let productindex = null;

        const findproduct = product.find((element, index) => {
            productindex = index
            return element.idproduct === id
        });

        if (findproduct === undefined) {

            let tempProduct = [...product];
            tempProduct.push({
                idproduct: id,
                quantity: 1,
                imgproduct: img,
                titleproduct: title,
                descriptionproduct: description,
                valorproduct: valor
            })
            setProduct(tempProduct)


        } else {
            let tempProduct = [...product];
            let tempElement = {...tempProduct[productindex]}
            tempElement.quantity += 1
            tempProduct[productindex] = tempElement
            setProduct(tempProduct)
        }
    }

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
                        <Button onClick={addToCart} variant="primary">
                            <i className="bi bi-bag"></i>&nbsp; R$ {valor.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cards;