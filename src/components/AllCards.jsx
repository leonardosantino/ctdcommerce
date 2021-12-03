import "../assets/styles/card.scss"
import api from './../service/api';
import { useState, useEffect } from 'react'

function Card() {
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
                                <div key={nome} className="col">
                                    <div className="card h-100">
                                        <img src={imagem} className="card-img-top img-fluid" alt={nome} />
                                        <div className="card-body">
                                            <div className="card-title">{nome}</div>
                                            <div className="card-text">{descricao}</div>
                                            <div className="card-btn my-2">
                                                <a href="#card" className="btn btn-primary">{valor}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                </>)
            })}
        </>
    )
}

export default Card;