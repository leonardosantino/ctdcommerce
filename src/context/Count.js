import {createContext, useContext, useEffect, useState} from "react";

const CountContext = createContext();

export function useCount() {
  const context = useContext(CountContext);
  const { count, setCount } = context;
  const { product, setProduct } = context;

  useEffect(()=>{
    const prodLocal = localStorage.getItem("produtos")
    if(prodLocal){
      setProduct(JSON.parse(prodLocal))
    }
  }, [setProduct])

  return { count, setCount, product, setProduct: (produto) => {
      setProduct(produto)
      localStorage.setItem("produtos", JSON.stringify(produto));
    } };
}

export function addToCart(product, setProduct, id, img, title, description, valor) {

  let productindex = null;

  const findproduct = product.find((element, index) => {
    productindex = index;
    return element.idproduct === id;
  });

  if (findproduct === undefined) {
    let tempProduct = [...product];
    tempProduct.push({
      idproduct: id,
      quantity: 1,
      imgproduct: img,
      titleproduct: title,
      descriptionproduct: description,
      valorproduct: valor,
    });
    setProduct(tempProduct);
  } else {
    let tempProduct = [...product];
    let tempElement = { ...tempProduct[productindex] };
    tempElement.quantity += 1;
    tempProduct[productindex] = tempElement;
    setProduct(tempProduct);
  }
}

export default function CountProvider({ children }) {
  const [product, setProduct] = useState([]);

  return (
      <CountContext.Provider
          value={{ product, setProduct, count: product.length }}
      >
        {children}
      </CountContext.Provider>
  );
}