import "../assets/styles/collections.scss"
import imgIndie from "../assets/imgs/imgIndie.png"
import imgEditors from "../assets/imgs/imgEditors.png"
import imgBataman from "../assets/imgs/imgBatman.png"
import imgPvr from "../assets/imgs/imgPvr.png"
import imgEssencial from "../assets/imgs/imgEssentials.png"

import { Container, Row, Col } from 'react-bootstrap'

function Collections() {
    return (
        <>
            <Container>
                <div className="collections-tile mt-5">
                    Collections
                    <hr />
                </div>
                <Row xs="auto" className="collections justify-content-center">
                    <Col className="d-flex justify-content-evenly flex-wrap">
                        <img className="img-fluid" src={imgIndie} alt="img card" />

                        <img className="img-fluid" src={imgEditors} alt="img card" />

                        <img className="img-fluid" src={imgBataman} alt="img card" />

                        <img className="img-fluid" src={imgPvr} alt="img card" />

                        <img className="img-fluid" src={imgEssencial} alt="img card" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Collections;