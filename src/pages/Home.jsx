import Navbar from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import { AlbumCard } from "../components/album/AlbumCard";
 
const Home = () => {
    return <>
    <Navbar />
    <Hero />
    <AlbumCard />
    </>
}

export default Home;