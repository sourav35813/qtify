import { useTheme } from "@emotion/react"
import { Typography } from "@mui/material";
import { SongCard } from "./SongCard";
import { Player } from "./Player";
import Hidden from "@mui/material/Hidden";

export const NowPlaying = () => {
    const theme = useTheme();
    return <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: theme.palette.customBlack.main, zIndex: 9999, borderTop: '1px solid white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <SongCard />
            <Player />
            <Hidden smDown>
                <div style={{ width: '200px' }}>
                    {/* this is a dummy div thats used to align the song player to the center */}
                </div>
            </Hidden>
        </div>
    </div>
}