import Header from "../components/Header";
import Categorie from "../components/Categorie";
import apiCard from "../service/apiCard";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function Games() {
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
      <Header />
      <Categorie>
        {
          data.map((data, index) => {
            return <div key={index}><Card img={data.imagem} title={data.nome} description={data.descricao} console={data.console} valor={data.valor} id={data.id}/></div> 
          })
        }
      </Categorie>
    </>
  );  }
  export default Games;