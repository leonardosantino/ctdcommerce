import { Image } from "react-bootstrap";

function CartProduct() {
  return (
    <>
        <tr>
          <th className="cart-col-img"><Image src="/images/games/imgGame20.png" fluid /></th>
          <th className="cart-col-desc "><span className="d-none d-md-block "> Days Gone SIE Bend Studio</span></th>
          <th className="cart-text-normal">R$ 119,90</th>
          <th className="cart-col-quantity cart-text-normal"><input type="number" name="cart-quantity" id="cart-quantity" min="1" defaultValue="2" /></th>
          <th className="cart-text-normal">R$ 390,90</th>
          <th className="cart-text-normal text-center"> <i className="bi bi-heart btn"></i><i className="bi bi-pencil-square btn"></i> <i className="bi bi-x-square btn"></i></th>
        </tr>
    </>
  );
}

export default CartProduct;