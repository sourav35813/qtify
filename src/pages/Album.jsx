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

export const Album = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const { albumid } = useParams();
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
            <AlbumHero />
            <AlbumTable />
        </div>
    </>
}