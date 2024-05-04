import React from "react";
// import HeroImage from "../../Components/HeroImage/HeroImage";
import Albums from "../../../components/Albums/Albums";
import Footer from "../../components/Footer/Footer";
import MusicPlayer from "../../components/MuiscPlayer/MusicPlayer";

const Home = () => {
  return (
    <div>
      {/* <HeroImage /> */}
      <Albums />
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Home;
