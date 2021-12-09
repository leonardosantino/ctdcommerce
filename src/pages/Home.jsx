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

                        <Header />
                        <main className="home">
                        <CarouselHome />
                        <div className="my-5">
                                <CarouselCard />
                        </div>
                        <div className="my-5">
                                <KeyFeatures />
                        </div>
                        <div className="mt-5">
                                <Collections />
                        </div>


                        </main>
                </>
        );
}
export default Home;