import "../assets/styles/descriptionproduct.scss"
import ProductDesc from "../components/ProductDesc";
import Header from "../components/Header"
import apiCard from "../service/apiCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function DescriptionProduct() {

  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {

    apiCard().then((response) => {
      setData(response.data)

    }).catch((error) => {
      console.error(error)
    })
    return
  }, [])


  return (
    <>
      <Header />
      <main className="descriptionproduct p-4">

        {
          data.map(function (data, index) {

            let product = null
            
            if (data.id === parseInt(id)) {
              product = <div key={index}><ProductDesc img={data.imagem} title={data.nome} description={data.descricao} valor={data.valor.toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2})} /></div>
            }
            return product
          })
        }

      </main>
    </>
  );
}

export default DescriptionProduct;