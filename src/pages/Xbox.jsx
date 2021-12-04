import Header from "../components/Header";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import apiCard from "../service/apiCard";
import Categorie from "../components/Categorie";

function Xbox() {

  const [data, setData] = useState([]);

  useEffect(() => {

    apiCard().then((response) => {
      setData(response.data)

    }).catch((error) => {
      console.error(error)
    })
    return
  },[])

  return (
    <>
      <Header currentlyPath="xbox" />
      <Categorie>
        {
          data.map((data, index) => {
            return <div key={index}><Card img={data.imagem} title={data.nome} description={data.descricao} console={data.console} valor={data.valor} /></div> 
          })
        }
      </Categorie>
    </>
  );
}

export default Xbox;