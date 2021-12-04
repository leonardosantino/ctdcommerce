import Persona from "../components/Persona"
import Header from "../components/Header"
import "../assets/styles/about.scss"

function About() {

  const pessoa = [
    { img: "images/personas/romullo.png", nome: "Rômullo", sobre: "Estudante", contato: "https://github.com/romulloalmeida", email: "romullo@ctd.com" },
    { img: "images/personas/rafaela.png", nome: "Rafaela", sobre: "Estudante", contato: "https://github.com/meirafa", email:"rafa@ctd.com"},
    { img: "images/personas/paulo.png", nome: "Paulo", sobre: "Estudante", contato: "https://github.com/dehonpaulo", email:"paulo@ctd.com" },
    { img: "images/personas/leo.png", nome: "Leonardo", sobre: "Estudante", contato: "https://github.com/leonardosantino", email:"leo@ctd.com" },
    { img: "images/personas/felipe.png", nome: "Felipe", sobre: "Estudante", contato: "https://github.com/FelipeReusch", email:"felipe@ctd.com" }
  ]

  return (
    <>
      <Header currentlyPath="about" />
      {pessoa.map(({ img, nome, sobre, contato, email }) =>
        <div className="container d-flex justify-content-center align-items-center">
          <Persona img={img} nome={nome} sobre={sobre} contato={contato} email={email} />
          <div id="gradient" className="card-img"></div>
        </div>
      )}
    </>
  );
}
export default About;