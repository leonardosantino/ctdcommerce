import "../assets/styles/keyfeatures.scss"
import imgViceral from "../assets/imgs/imgViceral.png"
import imgLead from "../assets/imgs/imgLead.png"
import imgDark from "../assets/imgs/imgDark.png"

function KeyFeatures() {
    return (
        <>
            <div className="container-fluid">
                <div className="collections-tile px-5 mt-5">
                    Key Features
                    <hr />
                </div>
                <div className="row p-5">
                    <div className="col ">
                        <div className="row">
                            <img className="img-fluid" src={imgViceral} alt="img card" />
                        </div>
                        <div className="row  text-center">
                            <span className="key-features-title p-2">Visceral Combat</span>  <br />
                            <span className="key-features-text p-2">Dual-wield powerful weapons such as axes, swords and even shields to relive the ruthless fighting style of the Viking warriors.</span>
                        </div>

                    </div>
                    <div className="col ">
                        <div className="row">
                            <img className="img-fluid" src={imgLead} alt="img card" />
                        </div>
                        <div className="row  text-center">
                            <span className="key-features-title p-2">A Dark-Age Open World</span>  <br />
                            <span className="key-features-text p-2">Sail from the harsh and mysterious shores of Norway to the beautiful but forbidding kingdoms of England and beyond.</span>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="row">
                            <img className="img-fluid" src={imgDark} alt="img card" />
                        </div>
                        <div className="row text-center">
                            <span className="key-features-title p-2">Lead Epic Raids</span>  <br />
                            <span className="key-features-text p-2">Launch massive assaults throughout England. Lead your clan in surprise attacks from your longship and then bring the riches back to your people.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KeyFeatures;