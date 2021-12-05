import "../assets/styles/keyfeatures.scss"
import imgViceral from "../assets/imgs/imgViceral.png"
import imgLead from "../assets/imgs/imgLead.png"
import imgDark from "../assets/imgs/imgDark.png"
import { Row, Col, Container } from 'react-bootstrap';

function KeyFeatures() {
    return (
        <>
            <Container>
                <div className="collections-tile px-5 mt-5">
                    Key Features
                    <hr />
                </div>
                <Row className="p-5">
                    <Col>
                        <div className="d-flex flex-column">
                            <img className="img-fluid" src={imgViceral} alt="img card" />
                            <div className="text-center">
                                <span className="key-features-title p-2">Visceral Combat</span>  <br />
                                <span className="key-features-text p-2">Dual-wield powerful weapons such as axes, swords and even shields to relive the ruthless fighting style of the Viking warriors.</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex flex-column">
                            <img className="img-fluid" src={imgLead} alt="img card" />
                            <div className="text-center">
                                <span className="key-features-title p-2">A Dark-Age Open World</span>  <br />
                                <span className="key-features-text p-2">Sail from the harsh and mysterious shores of Norway to the beautiful but forbidding kingdoms of England and beyond.</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex flex-column">
                            <img className="img-fluid" src={imgDark} alt="img card" />
                            <div className="text-center">
                                <span className="key-features-title p-2">Lead Epic Raids</span>  <br />
                                <span className="key-features-text p-2">Launch massive assaults throughout England.Lead your clan in surprise attacks from your longship and then bring the riches back to your people.</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default KeyFeatures;