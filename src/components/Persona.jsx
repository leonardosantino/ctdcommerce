import persona1 from "../assets/imgs/persona1.png"
import "../assets/styles/persona.scss"
function Persona() {

    return (
        <>
            <div className="d-flex">

                <div className="col">
                    <div className="persona-img">
                        <img className="img-fluid" src={persona1} alt="" />
                    </div>
                </div>

                <div className="col persona align-self-center">
                    <span className="persona-title persona">Front-end</span>
                    <hr />
                    <span className="persona-description">Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</span> <br />
                    <span className="persona-name">Gita Savitri</span> <br />
                    <span className="persona-role">Content Creator/Influencer</span>
                </div>

            </div>
        </>
    );
}
export default Persona;