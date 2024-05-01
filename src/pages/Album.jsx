import { useParams, useNavigate } from "react-router-dom"
import { AlbumHero } from "../components/albumhero/AlbumHero";
import { useTheme } from "@mui/material/styles";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Icon } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { AlbumTable } from "../components/albumsongstable/AlbumTable";
import { Hidden } from '@mui/material';
import Box from "@mui/material/Box";
import { Searchbar } from "../components/navbar/Searchbar";
import { useEffect, useState } from "react";
import axios from "axios";

export const Album = () => {
    const [albumData, setAlbumData] = useState();
    const { albumid } = useParams();
    useEffect(() => {
        const getData = async() => {
            try{
                const url = `https://qtify-backend-labs.crio.do/album/${albumid}`
                const res = await axios.get(url);
                setAlbumData(res.data);
            }catch(e){
                console.log(e.response);
            }
        }
        getData();
    },[]);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const theme = useTheme();
    const navigate = useNavigate();
    return <>
        <Hidden mdUp>
            <Box sx={{ width: '100vw' }}>
                <Searchbar />
            </Box>
        </Hidden>
        <div style={{ padding: isSmallScreen ? "30px 30px" : "30px 50px", backgroundColor: theme.palette.customBlack.main }} color="white">
            <Icon sx={{ color: 'white', paddingRight: "10px", paddingBottom: "20px", cursor: 'pointer' }}>
                <ArrowCircleLeftOutlinedIcon fontSize="large" onClick={() => navigate("/")} />
            </Icon>
            <AlbumHero data={albumData} />
            <AlbumTable data={albumData} />
        </div>
    </>
}