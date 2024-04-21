import TestImg from "../../assets/test-img.jpeg";
import { Box } from "@mui/material";
import { Chip } from "@mui/material";
import { useTheme } from "@emotion/react";

const AlbumCard = ({imageSrc, name, followsCount}) => {
    const theme = useTheme();
    return <>
        <Box
            sx={{
                width: '200px',
                height: '280px',
                backgroundColor: 'white',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
            }}
        >
            <img
                src={TestImg}
                alt="Your Image"
                style={{
                    width: '100%',
                    height: '80%',
                    objectFit: 'cover',
                }}
            />
            <Box display="flex" alignItems="center" sx={{ backgroundColor: 'red', height: '20%' }}>
                <Chip label="100 follower" sx={{color: 'white', ml:'10px', backgroundColor: theme.palette.customBlack.main}} />
            </Box>
        </Box>
    </>
}

export { AlbumCard };

