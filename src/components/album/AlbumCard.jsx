import { Box } from "@mui/material";
import { Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";

const AlbumCard = ({ data, isSongsSection=false }) => {
    const theme = useTheme();
    let count;
    if(!isSongsSection){
        count = data.follows + " Follows"
    }else{
        count = data.likes + " Likes"
    }
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
                src={data.image}
                alt="Your Image"
                style={{
                    width: '100%',
                    height: '84%',
                    objectFit: 'cover',
                }}
            />
            <Box display="flex" alignItems="center" sx={{ backgroundColor: "white", height: '16%' }}>
                <Chip size="small" label={count} sx={{ color: 'white', ml: '10px', backgroundColor: theme.palette.customBlack.main, fontSize: '11px' }} />
            </Box>
        </Box>
        <Typography variant="body2" sx={{ pt: '5px', pb:'10px' }}>
            {data.title}
        </Typography>
    </>
}

export { AlbumCard };

