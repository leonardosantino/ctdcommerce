import Persona from "../components/Persona"
import Header from "../components/Header"
import "../assets/styles/about.scss"

import 'bootstrap/dist/css/bootstrap.css';
import {Carousel, Container} from 'react-bootstrap';
import {Helmet} from "react-helmet-async";

function About() {

    const integrantes = [
        {
            img: "images/personas/romullo.png",
            nome: "Rômullo",
            sobre: "Estudante",
            contato: "https://github.com/romulloalmeida",
            email: "romullo@ctd.com"
        },
        {
            img: "images/personas/rafaela.png",
            nome: "Rafaela",
            sobre: "Estudante",
            contato: "https://github.com/meirafa",
            email: "rafa@ctd.com"
        },
        {
            img: "images/personas/paulo.png",
            nome: "Paulo",
            sobre: "Estudante",
            contato: "https://github.com/dehonpaulo",
            email: "paulo@ctd.com"
        },
        {
            img: "images/personas/leo.png",
            nome: "Leonardo",
            sobre: "Estudante",
            contato: "https://github.com/leonardosantino",
            email: "leo@ctd.com"
        },
        {
            img: "images/personas/felipe.png",
            nome: "Felipe",
            sobre: "Estudante",
            contato: "https://github.com/FelipeReusch",
            email: "felipe@ctd.com"
        }
    ]

    return (
        <>
            <Helmet>
                <title>CTD GAMES | About</title>
            </Helmet>
            <Header currentlyPath="about"/>

            <Container>

                <div className="persona align-self-center">
                    <span className="persona-title persona">About</span>
                    <hr/>
                    <span className="persona-description">Conheça os criadores do CTD-Ecommerce:</span> <br/>
                </div>

                <Carousel indicators={false}>

                    {integrantes.map(({img, nome, sobre, contato, email},index) =>
                        <Carousel.Item interval={2000} key={index}>
                            <Container className="d-flex justify-content-center align-items-center">
                                <Persona img={img} nome={nome} sobre={sobre} contato={contato} email={email}/>
                                <div id="gradient" className="card-img"></div>
                            </Container>
                        </Carousel.Item>
                    )}

                </Carousel>
            </Container>
        </>
    );
}

export default About;