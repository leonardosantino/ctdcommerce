import "../assets/styles/card.scss"
import { NavLink } from "react-router-dom";
import { useCount } from "../context/Count";
import { useEffect } from "react";

function Card({ img, title, description, console, valor, id }) {
    const { count, setCount, product, setProduct } = useCount();

    useEffect(() => {

        return
    }, [])

    function addToCart() {

        let productindex = null;

        const findproduct = product.find((element, index) => {
            productindex = index
            return    element.idproduct === id      
        });

        if(findproduct === undefined){

            let tempProduct = [...product];
            tempProduct.push({idproduct: id, quantity: 1, imgproduct: img, titleproduct: title, descriptionproduct: description ,valorproduct: valor})
            setProduct(tempProduct)
            setCount(count +1)

        }else{

            let tempProduct = [...product];
            let tempElement = { ...tempProduct[productindex] }
            tempElement.quantity += 1
            tempProduct[productindex] = tempElement
            setProduct(tempProduct)

        }
    }
    return (
        <>
            <div className="card">
                <img src={img} className="card-img-top" alt="Card img" />
                <div className="card-body">
                    <div className="card-title"><NavLink className="card-title text-decoration-none" to={`/games/${id}`} >{title}</NavLink>  </div>
                    <div className="card-text">{description}</div>
                    <div className="card-cat my-2"><span className="consol">{console}</span></div>
                    <div className="card-btn my-2"><button onClick={addToCart} className="btn btn-primary"><i className="bi bi-bag"></i>&nbsp; R$ {valor.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</button></div>
                </div>
            </div>
        </>
    );
}
export default Card;