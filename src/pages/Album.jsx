import { useParams, useNavigate } from "react-router-dom"
import { AlbumHero } from "../components/albumhero/AlbumHero";
import { useTheme } from "@mui/material/styles";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Icon } from "@mui/material";

export const Album = () => {
    const { albumid } = useParams();
    const theme = useTheme();
    const navigate = useNavigate();
    return <>
        <div style={{ padding: "30px 50px", backgroundColor: theme.palette.customBlack.main }} color="white">
            <Icon sx={{color:'white', paddingRight:"10px", paddingBottom:"20px",  cursor: 'pointer' }}>
                <ArrowCircleLeftOutlinedIcon fontSize="large" onClick={() => navigate("/")}/>
            </Icon>
            <AlbumHero />
        </div>

    </>
}