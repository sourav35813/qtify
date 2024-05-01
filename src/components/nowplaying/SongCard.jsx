import { Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext } from "react";
import { CurrentSongContext } from "../contexts/ContextForCurrentSong";

export const SongCard = ({ data }) => {
    const theme = useTheme();
    const { currentSong, setCurrentSong } = useContext(CurrentSongContext);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return <Box color="white" display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} width={"200px"} padding={"16px"}>
            <div style={{ width: '60px', height: '60px', overflow: 'hidden', position: 'relative', borderRadius: '10px' }}>
                <img
                    src={currentSong?.image}
                    alt={currentSong?.title}
                    // style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    style={{ width: '100%', height: 'auto'}}
                />
            </div>
            <Stack>
                <Typography variant="body1">
                {currentSong?.songTitle}
                </Typography>
                <Typography variant="caption">
                    {currentSong?.albumTitle}
                </Typography>
            </Stack>
        </Box>
    // </div>
}