import "../assets/styles/games.scss"
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import apiCard from "../service/apiCard";
import Card from "../components/Card";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {Row, Container, Col} from "react-bootstrap"

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
      <Header />
      <main className="games">
        <Container fluid>
        <Row >
          <Col className="d-flex justify-content-center p-5 gap-3 catetorie-bar">
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
                product = <Col xs="auto" key={index}><Card img={data.imagem} title={data.nome} description={data.descricao} console={data.console} valor={data.valor} id={data.id} /></Col>
              } else if (!category) {
                product = <Col xs="auto" key={index}><Card img={data.imagem} title={data.nome} description={data.descricao} console={data.console} valor={data.valor} id={data.id} /></Col>
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