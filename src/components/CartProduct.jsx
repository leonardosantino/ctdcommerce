import { Image } from "react-bootstrap";
import { useCount } from "../context/Count";

function CartProduct({img, description, valor, quantity, idproduct, isLiked,}) {
  
  const { setProduct, product } = useCount();

  return (
    <>
      <th className="cart-col-img">
        <Image src={img} fluid />
      </th>

      <th className="cart-col-desc ">
        <span className="d-none d-md-block ">{description}</span>
      </th>

      <th className="cart-text-normal">R$ {valor.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</th>

      <th className="cart-col-quantity cart-text-normal">
        <input type="number" name="cart-quantity" id="cart-quantity" min="1" defaultValue={quantity} disabled={true} />
      </th>

      {/* <th className="cart-text-normal">R$ 390,90</th> */}
      <th className="cart-text-normal text-center">
        <i
          className={`bi bi-heart btn ${isLiked ? "is-liked" : ""}`}
          onClick={() => {
            const newProducts = product.map((el) => {
              if (el.idproduct !== idproduct) return el;
              return {
                ...el,
                isLiked: !el.isLiked,
              };
            });

            setProduct(newProducts);
          }}
        />
        {/*<i className="bi bi-pencil-square btn" />*/}
        <i
          className="bi bi-x-square btn"
          onClick={() => {
            const newProducts = product.filter(
              (el) => el.idproduct !== idproduct
            );
            setProduct(newProducts);
          }}
        />
      </th>
    </>
  );
}

export default CartProduct;
