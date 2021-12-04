import "../assets/styles/home.scss";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import CarouselCard from "../components/CarouselCard";
import Collections from "../components/Collections";
import KeyFeatures from "../components/KeyFeatures";

function Home() {
        return (
                <>
                        <Header currentlyPath="home" />
                        <Carousel />
                        <CarouselCard />
                        <KeyFeatures/>
                        <Collections />
                </>
        );
}
export default Home;