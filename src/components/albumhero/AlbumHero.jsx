import { colors } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
export const AlbumHero = ({ data }) => {
    const theme = useTheme();
    return <Grid container rowSpacing={0} color={"white"} width={"100%"} padding={"10px 20px"} justifyContent="flex-start" alignItems="center">
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <div style={{ width: '250px', height: '250px', overflow: 'hidden', position: 'relative', borderRadius: '10px' }}>
                <img
                    src="https://images.pexels.com/photos/2489986/pexels-photo-2489986.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                    alt="song"
                    style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                />
            </div>
            {/* <img src="" alt="album image" height={"300px"} /> */}
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
            <h1 sx={{ color: 'red' }}>Album name</h1>
        </Grid>
    </Grid>
}

// columnSpacing={{ xs: 6, sm: 12, md: 10, lg: 14 }}
