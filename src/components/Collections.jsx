import "../assets/styles/collections.scss"
import imgIndie from "../assets/imgs/imgIndie.png"
import imgEditors from "../assets/imgs/imgEditors.png"
import imgBataman from "../assets/imgs/imgBatman.png"
import imgPvr from "../assets/imgs/imgPvr.png"
import imgEssencial from "../assets/imgs/imgEssentials.png"

function Collections() {
    return (
        <>
            <div className="container-fluid">
                <div className="collections-tile px-5 my-5">
                    Collections
                    <hr />
                </div>
                <div className="row ps-5 collections ">
                    <div className="col d-flex justify-content-center p-2">
                        <img className="img-fluid" src={imgIndie} alt="img card" />
                    </div>
                    <div className="col d-flex justify-content-center p-2">
                        <img className="img-fluid" src={imgEditors} alt="img card" />
                    </div>
                    <div className="col d-flex justify-content-center p-2">
                        <img className="img-fluid" src={imgBataman} alt="img card" />
                    </div>
                    <div className="col d-flex justify-content-center p-2">
                        <img className="img-fluid" src={imgPvr} alt="img card" />
                    </div>
                    <div className="col d-flex justify-content-center p-2">
                        <img className="img-fluid" src={imgEssencial} alt="img card" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collections;