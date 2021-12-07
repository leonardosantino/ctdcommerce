import "../assets/styles/collections.scss"
import imgIndie from "../assets/imgs/imgIndie.png"
import imgEditors from "../assets/imgs/imgEditors.png"
import imgBataman from "../assets/imgs/imgBatman.png"
import imgPvr from "../assets/imgs/imgPvr.png"
import imgEssencial from "../assets/imgs/imgEssentials.png"

import { Container, Row, Col, Image } from 'react-bootstrap'

function Collections() {
    return (
        <>
            <Container fluid className="collections">
                <Row >
                    <Col className="collections-tile">
                        Collections
                        <hr />
                    </Col>
                </Row>

                <Row xs={3} md={6} className="justify-content-center">
                    <Col xs="auto" className="d-flex justify-content-center">
                        <Image src={imgIndie} fluid />
                    </Col>
                    <Col xs="auto" className="d-flex justify-content-center">
                        <Image src={imgEditors} fluid />
                    </Col>
                    <Col xs="auto" className="d-flex justify-content-center">
                        <Image src={imgBataman} fluid />
                    </Col>
                    <Col xs="auto" className="d-flex justify-content-center">
                        <Image src={imgPvr} fluid />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Image src={imgEssencial} fluid />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Collections;