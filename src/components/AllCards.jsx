import "../assets/styles/card.scss"
import api from './../service/api';
import { useState, useEffect } from 'react'

function AllCards() {
    const [resultado, setResultado] = useState([]);
    useEffect(() => {
        api().then((res) => setResultado(Object.entries(res)))
    }, [])

    return (
        <>
            {resultado.map(([marca, items]) => {
                return (<>
                    <div key={marca} className="row g-4">
                        {items.map(({ imagem, nome, descricao, valor }) => {
                            return <>
                                <Col key={nome}>
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={imagem} alt={nome} />
                                        <Card.Body>
                                            <Card.Title>{nome}</Card.Title>
                                            <Card.Text>{descricao}</Card.Text>
                                            <div className="card-btn my-2">
                                                <Button variant="primary" href="/card">{valor}</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        })}
                    </div>
                </>)
            })}
        </>
    )
}

export default AllCards;