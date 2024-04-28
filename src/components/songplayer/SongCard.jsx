import { Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
export const SongCard = ({ data }) => {
    // <div style={{display:'inline', marginLeft:'0'}}>
    return <Box color="white" display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} width={"200px"} padding={"20px"}>
            <div style={{ width: '70px', height: '70px', overflow: 'hidden', position: 'relative', borderRadius: '10px' }}>
                <img
                    src="https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                    alt="song"
                    style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                />
            </div>
            <Stack>
                <Typography variant="body1">
                    Song name
                </Typography>
                <Typography variant="caption">
                    Album name
                </Typography>
            </Stack>
        </Box>
    // </div>
}