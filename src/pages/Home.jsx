import "../assets/styles/home.scss";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import CarouselCard from "../components/CarouselCard";
import RecentNews from "../components/RecentNews";

function Home() {
        return (
                <>
                        <Header />
                        <Carousel />
                        <Carousel />
                        <CarouselCard />
                        <RecentNews />
                </>
        );
}
export default Home;