import Navbar from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import {Carousel} from "../components/album/Carousel";
 
const Home = () => {
    return <>
    <Navbar />
    <Hero />
    <Carousel />
    </>
}

export default Home;