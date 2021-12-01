import "../assets/styles/home.scss"
import Header from "../components/Header"
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Product from "../components/Product";

function Home() {
    return (
      <>
        <Header/>

        <Carousel/>

        <div className="d-flex justify-content-between px-5">
        <Card/> <Card/> <Card/> <Card/> <Card/>
        </div>

        <div className="p-5">
        <Product />
        </div>

      </>
    );
  }
  export default Home;