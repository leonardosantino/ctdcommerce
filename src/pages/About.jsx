import Persona from "../components/Persona"
import Header from "../components/Header"
import "../assets/styles/about.scss"
function About() {
  return (
    <>
      <Header currentlyPath="about"/>
      <div className="mt-5 me-5">
        <Persona />
      </div>
      <div className="mt-5 me-5">
        <Persona />
      </div>
      <div className="mt-5 me-5">
        <Persona />
      </div>
      <div className="mt-5 me-5">
        <Persona />
      </div>
      <div className="mt-5 mb-5 me-5">
        <Persona />
      </div>
    </>
  );
}
export default About;