import TestImg from "../../assets/test-img.jpeg";
import { Box } from "@mui/material";
import { Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";

const AlbumCard = ({ imageSrc, name, followsCount }) => {
    const theme = useTheme();
    return <>
        <Box
            sx={{
                width: '180px',
                height: '240px',
                backgroundColor: 'white',
                borderRadius: 2,
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
                    height: '84%',
                    objectFit: 'cover',
                }}
            />
            <Box display="flex" alignItems="center" sx={{ backgroundColor: "white", height: '16%' }}>
                <Chip size="small" label="100 Follows" sx={{ color: 'white', ml: '10px', backgroundColor: theme.palette.customBlack.main, fontSize: '11px' }} />
            </Box>
        </Box>
        <Typography variant="body2" sx={{ pt: '5px', pb:'10px' }}>
            New Bollywood
        </Typography>
    </>
}

export { AlbumCard };

