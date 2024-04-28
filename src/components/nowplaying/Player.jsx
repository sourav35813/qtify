import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from "@emotion/react"
import Typography from '@mui/material/Typography';

export const Player = () => {
    const theme = useTheme();
    const [isPlaying, setIsPlaying] = useState(false);
    return <Box color="white" width="600px" sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        {
            !isPlaying ?
                <PlayCircleIcon fontSize="large" color="white" onClick={() => setIsPlaying(true)} />
                :
                <PauseCircleIcon fontSize="large" color="white" onClick={() => setIsPlaying(false)} />
        }
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography variant="caption">0:38</Typography>
            <div style={{width:'600px', paddingLeft:'6px', paddingRight:'6px'}}>
            <LinearProgress variant="determinate" value={30} />
            </div>
            <Typography variant="caption">3:38</Typography>
        </Box>
    </Box>
}