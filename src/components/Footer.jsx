import '../assets/styles/footer.scss';
import imgCtd from "../assets/imgs/logotipo.png";
import { Link } from 'react-router-dom';

//const links = [];

function Footer() {
    return (<>
        <footer>

            <div className="logo d-flex justify-content-center">
                <Link to="/"><img src={imgCtd} alt="logotipo" className="img-fluid logotipo" /></Link>
            </div>
            <div className="links d-flex justify-content-center">
                <span><Link to="#" target="_blank" className="text-decoration-none">Facebook</Link> 
                | <Link to="#" target="_blank" className="text-decoration-none">Twitter</Link> 
                | <Link to="#" target="_blank" className="text-decoration-none">Intagram</Link></span>
            </div>

            <div className="d-flex justify-content-center">
                <span>
                    © 2021 Created by:
                    <Link to="https://github.com/FelipeReusch" target="_blank" className="text-decoration-none"> Felipe </Link>
                    | <Link to="https://github.com/leonardosantino" target="_blank" className="text-decoration-none"> Leonardo</Link>
                    | <Link to="https://github.com/romulloalmeida" target="_blank" className="text-decoration-none"> Rômullo </Link>
                    | <Link to="https://github.com/dehonpaulo" target="_blank" className="text-decoration-none">Paulo</Link>
                    | <Link to="https://github.com/meirafa" target="_blank" className="text-decoration-none">Rafaela</Link>
                </span>
            </div>

        </footer>
    </>)
}

export default Footer;