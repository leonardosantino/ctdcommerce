import "../assets/styles/descriptionproduct.scss"
import ProductDescription from "../components/ProductDescription";
import Header from "../components/Header"
import apiProduct from "../service/apiProduct";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function DescriptionProduct() {

  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {

    apiProduct(`/produto/${id}`).then((response) => {
      setData(response.data)

    }).catch((error) => {
      console.error(error)
    })
    return
  }, [id])
  
  return (
    <>
      <Header />
      <main className="descriptionproduct p-4">
      <ProductDescription id={data.id} img={data.imagem} title={data.nome} description={data.descricao} valor={data.valor} sinopse={data.sinopse}/>
      </main>
    </>
  );
}

export default DescriptionProduct;