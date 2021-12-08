import { createContext, useContext, useState } from "react";

const CountContext = createContext();

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

export function useCount() {
  const context = useContext(CountContext);
  const { count, setCount } = context;
  const { product, setProduct } = context;

  return { count, setCount, product, setProduct };
}
