import { useTheme } from "@emotion/react"
import { Typography } from "@mui/material";
import { SongCard } from "./SongCard";
import { Player } from "./Player";
import Stack from "@mui/material/Stack";
export const SongPlayer = () => {
    const theme = useTheme();
    return <div style={{ backgroundColor: theme.palette.customBlack.main }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
            <div >
                <SongCard />
            </div>
            <div style={{ margin:'0 auto' }}>
                <Player />
            </div>
        </div>
        {/* <Stack direction={"row"}>
            <SongCard />
            <Player />
        </Stack> */}
    </div>
}