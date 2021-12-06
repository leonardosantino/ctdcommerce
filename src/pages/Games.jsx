import "../assets/styles/games.scss"
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import apiCard from "../service/apiCard";
import Cards from "../components/Cards";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {Row, Container, Col} from "react-bootstrap"
import {Helmet} from "react-helmet";

function Games() {

  const { category } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {

    apiCard().then((response) => {
      setData(response.data)

    }).catch((error) => {
      console.error(error)
    })
    return
  }, [])

  return (
    <>
      <Helmet>

        <title>CTD Ecommerce | {!category ? 'game' : category}</title>
      </Helmet>
      <Header />
      <main className="games">
        <Container fluid>
        <Row >
          <Col className="d-flex flex-wrap justify-content-center p-5 gap-3 games-filter">
            <NavLink className="btn text-decoration-none" to="/games">ALL</NavLink>
            <NavLink className="btn text-decoration-none" to="/games/category/action">ACTION</NavLink>
            <NavLink className="btn text-decoration-none" to="/games/category/shooter">SHOOTER</NavLink>
            <NavLink className="btn text-decoration-none" to="/games/category/sports">SPORTS</NavLink>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center gap-1">
          {
            data.map((data, index) => {
              let product = null
              if (data.categoria?.nome === category) {
                product = <Col xs="auto" key={index}><Cards img={data.imagem} title={data.nome} description={data.descricao} console={data.console} valor={data.valor} id={data.id} /></Col>
              } else if (!category) {
                product = <Col xs="auto" key={index}><Cards img={data.imagem} title={data.nome} description={data.descricao} console={data.console} valor={data.valor} id={data.id} /></Col>
              }
              return product
            })
          }
        </Row>
        </Container>
      </main>
    </>
  );
}
export default Games;