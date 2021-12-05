import "../assets/styles/home.scss";
import Header from "../components/Header";
import CarouselHome from "../components/CarouselHome";
import CarouselCard from "../components/CarouselCard";
import Collections from "../components/Collections";
import KeyFeatures from "../components/KeyFeatures";

function Home() {
        return (
                <>
                        <Header currentlyPath="home" />
                        <CarouselHome />
                        <CarouselCard />
                        <KeyFeatures />
                        <Collections />
                </>
        );
}
export default Home;