import Navbar from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import { Section } from "../components/section/Section";
import { useTheme } from "@emotion/react";
import { FAQ } from "../components/faq/FAQ";

const Home = () => {
    const theme = useTheme();
    return <>
        <Navbar />
        <Hero />
        <Section />
        <Section />
        <div style={{backgroundColor:theme.palette.primary[400], height:'1px'}}><br/></div>
        <Section isSongsSection={true} />
        <div style={{backgroundColor:theme.palette.primary[400], height:'1px'}}><br/></div>
        <FAQ />
    </>
}

export default Home;