import Header from "../components/Header";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import apiCard from "../service/apiCard";

function Xbox() {
  const img = "images/games/imgGame20.png"


  const [data, setData] = useState({});

  useEffect(() => {

    apiCard().then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.error(error)
    })
    
  }, [])

  return (
    <>
      <Header currentlyPath="xbox" />
      <Card img={img} title={data.nome} />
    </>
  );
}

export default Xbox;