import { Box } from "@mui/material";
import { Chip } from "@mui/material";
import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import {useNavigate} from "react-router-dom"

export const CustomCard = ({ data, isSongsSection = false }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    let count;
    let title;
    if (!isSongsSection) {
        count = data.follows + " Follows"
        title = data.songs.length + " songs";
    } else {
        count = data.likes + " Likes"
    }
    return <>
        {
            isSongsSection ?
                (
                    <>
                        <Box
                            sx={{
                                width: '160px',
                                height: '210px',
                                backgroundColor: 'white',
                                borderRadius: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                cursor: 'pointer'
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
                        <Typography variant="body2" sx={{ pt: '5px', pb: '10px', width: '160px' }}>
                            {data.title}
                        </Typography>
                    </>
                )
                :
                (
                    <Tooltip
                        title={title}
                        placement="top"
                        arrow
                        display="flex"
                        justifyContent="center"
                    >
                        <Box
                            sx={{
                                width: '160px',
                                height: '210px',
                                backgroundColor: 'white',
                                borderRadius: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            onClick={() => navigate(`/album/${data.slug}`)}
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
                        <Typography variant="body2" sx={{ pt: '5px', pb: '10px', width: '160px' }}>
                            {data.title}
                        </Typography>
                    </Tooltip>
                )
        }
    </>
}




