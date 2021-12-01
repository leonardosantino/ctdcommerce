import "../assets/styles/home.scss"
import Header from "../components/Header"
import Carousel from "../components/Carousel";
import Card from "../components/Card";

function Home() {
    return (
      <>
        <Header/>
        <Carousel/>
        <div className="d-flex justify-content-between px-5">
        <Card/> <Card/> <Card/> <Card/> <Card/>
        </div>
        
      </>
    );
  }
  
  export default Home;