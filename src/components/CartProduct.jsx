import { Image } from "react-bootstrap";

function CartProduct({img, description, valor, quantity}) {
  return (
    <>
        <tr>
          <th className="cart-col-img"><Image src={img} fluid /></th>
          <th className="cart-col-desc "><span className="d-none d-md-block ">{description}</span></th>
          <th className="cart-text-normal">R$ {valor}</th>
          <th className="cart-col-quantity cart-text-normal"><input type="number" name="cart-quantity" id="cart-quantity" min="1" defaultValue={quantity} /></th>
          {/* <th className="cart-text-normal">R$ 390,90</th> */}
          <th className="cart-text-normal text-center"> <i className="bi bi-heart btn"></i><i className="bi bi-pencil-square btn"></i> <i className="bi bi-x-square btn"></i></th>
        </tr>
    </>
  );
}

export default CartProduct;