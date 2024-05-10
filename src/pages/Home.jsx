import Navbar from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import { Section } from "../components/section/Section";
import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import { FAQ } from "../components/faq/FAQ";
import { useState, useEffect } from "react";
import axios from "axios";
import { Searchbar } from "../components/navbar/Searchbar";
import { Hidden } from '@mui/material';
import { GreenLine } from "../components/greenline/GreenLine";

const Home = () => {
    const [tAlbums, setTAlbums] = useState();
    const [nAlbums, setNAlbums] = useState();
    const [songs, setSongs] = useState();
    useEffect(() => {
        const getTopAlbumData = async () => {
            try {
                const tAlbumURL = "https://qtify-backend-labs.crio.do/albums/top"
                const res = await axios.get(tAlbumURL);
                // console.log("res:" + JSON.stringify(res.data));
                setTAlbums(res.data);
            } catch (e) {
                console.log(e.response);
            }
        }
        const getNewAlbumData = async () => {
            try {
                const nAlbumURL = "https://qtify-backend-labs.crio.do/albums/new"
                const res = await axios.get(nAlbumURL);
                // console.log("res:" + JSON.stringify(res.data));
                setNAlbums(res.data);
            } catch (e) {
                console.log(e.response);
            }
        }
        const getSongData = async () => {
            try {
                const sURL = "https://qtify-backend-labs.crio.do/songs"
                const res = await axios.get(sURL);
                setSongs(res.data);
            } catch (e) {
                console.log(e.response);
            }
        }
        getTopAlbumData();
        getNewAlbumData();
        getSongData();
    }, [])
    const theme = useTheme();
    return <>
        <Hidden mdUp>
            <Box sx={{ width: '100vw' }}>
                <Searchbar />
            </Box>
        </Hidden>
        <Hero />
        <Section sectionName="Top Albums" data={tAlbums} />
        <Section sectionName="New Albums" data={nAlbums} />
        <GreenLine />
        <Section sectionName="Songs" data={songs} isSongsSection={true} />
        <GreenLine />
        <FAQ />
    </>
}

export default Home;