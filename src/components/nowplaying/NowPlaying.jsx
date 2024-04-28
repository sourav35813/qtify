import { useTheme } from "@emotion/react"
import { Typography } from "@mui/material";
import { SongCard } from "./SongCard";
import { Player } from "./Player";
import Stack from "@mui/material/Stack";
export const NowPlaying = () => {
    const theme = useTheme();
    return <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: theme.palette.customBlack.main, zIndex: 9999,  borderTop: '1px solid white'}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <SongCard />
            </div>
            <div style={{ marginRight: '34rem' }}>
                <Player />
            </div>
        </div>
    </div>
}

{/* <Stack direction={"row"}>
            <SongCard />
            <Player />
        </Stack> */}