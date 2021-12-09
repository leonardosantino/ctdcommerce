import "../assets/styles/games.scss"
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import apiProduct from "../service/apiProduct";
import Cards from "../components/Cards";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Row, Container, Col } from "react-bootstrap"
import { Helmet } from "react-helmet-async";

function Games() {

    const { categoryname } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {

        if(categoryname){

            apiProduct(`/produto/categoria/${categoryname}/`).then((response) => {
                setData(response.data)
            }).catch((error) => {
                console.error(error)
            })

        }else{

            apiProduct("/produto/").then((response) => {
                setData(response.data)
            }).catch((error) => {
                console.error(error)
            })
        }

        return

    }, [categoryname])

    return (
        <>
            <Helmet>
                <title>CTD GAMES | {!categoryname ? 'GAMES' : categoryname}</title>
            </Helmet>
            <Header />
            <main className="games">
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-wrap justify-content-center p-3 gap-3 games-filter">
                            <span className="games-filter-span">
                                <NavLink className="btn text-decoration-none" to="/games/">ALL &nbsp;|</NavLink>
                                <NavLink className="btn text-decoration-none" to="/games/Action">ACTION &nbsp;|</NavLink>
                                <NavLink className="btn text-decoration-none" to="/games/Shooter">SHOOTER &nbsp;|</NavLink>
                                <NavLink className="btn text-decoration-none" to="/games/Sports">SPORTS</NavLink>
                            </span>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-center gap-1">
                        {
                            data.map((data, index) => {
                                return <Col xs="auto py-1" key={index}>
                                    <Cards img={data.imagem} title={data.nome} description={data.descricao}
                                        console={data.console} valor={data.valor} id={data.id} category={data.categoria.nome}/>
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Games;