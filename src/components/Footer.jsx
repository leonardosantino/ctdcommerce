/* eslint-disable jsx-a11y/alt-text */
import '../assets/styles/footer.scss';

const imgcartao = {
    cartao1: "/images/footer/image25.png",
    cartao2: "/images/footer/image26.png",
    cartao3: "/images/footer/image27.png",
    cartao4: "/images/footer/image28.png",
    cartao5: "/images/footer/image29.png",
    cartao6: "/images/footer/image32.png",
    cartao7: "/images/footer/image33.png",
    cartao8: "/images/footer/image34.png",
    cartao9: "/images/footer/image35.png",
    cartao10: "/images/footer/image36.png" 
}


function Footer() {


    return (
        <>
            <div className="footer">

                <div className="card-cartao">
                    <div className="cartao d-flex justify-content-evenly">
                    <img src={imgcartao.cartao1} alt="BNI" className="cartao1 img-fluid" />
                        <img src={imgcartao.cartao2}alt="BNI" className="cartao2 img-fluid" />
                        <img src={imgcartao.cartao3}alt="BNI" className="cartao3 img-fluid" />
                        <img src={imgcartao.cartao4}alt="BNI" className="cartao4 img-fluid" />
                        <img src={imgcartao.cartao5}alt="BNI" className="cartao5 img-fluid" />
                    </div>
                    <div className="cartao d-flex justify-content-evenly">
                        <img src={imgcartao.cartao6}alt="BNI" className="cartao6 img-fluid" />
                        <img src={imgcartao.cartao7}alt="BNI" className="cartao7 img-fluid" />
                        <img src={imgcartao.cartao8}alt="BNI" className="cartao8 img-fluid" />
                        <img src={imgcartao.cartao9}alt="BNI" className="cartao9 img-fluid" />
                        <img src={imgcartao.cartao10}alt="BNI" className="cartao10 img-fluid" />
                    </div>
                </div>



            </div>
        </>
    )
}

export default Footer;