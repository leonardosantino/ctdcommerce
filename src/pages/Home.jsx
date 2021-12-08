import "../assets/styles/home.scss";
import Header from "../components/Header";
import CarouselHome from "../components/CarouselHome";
import CarouselCard from "../components/CarouselCard";
import Collections from "../components/Collections";
import KeyFeatures from "../components/KeyFeatures";
import { Helmet } from "react-helmet-async";

function Home() {
        return (
                <>
                        <Helmet>
                                <title>CTD GAMES</title>
                        </Helmet>

                        <Header currentlyPath="home" />
                        <CarouselHome />
                        <div className="my-5">
                                <CarouselCard />
                        </div>
                        <div className="my-5">
                                <KeyFeatures />
                        </div>
                        <div className="my-5">
                                <Collections />
                        </div>
                </>
        );
}
export default Home;