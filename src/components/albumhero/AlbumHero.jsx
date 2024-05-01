import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import useMediaQuery from '@mui/material/useMediaQuery';

export const AlbumHero = ({ data }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return <Grid container rowSpacing={0} color={"white"} width={"100%"} padding={"10px 20px"}
        alignItems="center"
        sx={{ justifyContent: isSmallScreen ? 'center' : 'flex-start' }}
    >
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={{display:'flex', justifyContent:'center'}}>
            <div style={{ width: '250px', height: '250px', overflow: 'hidden', borderRadius: '10px' }}>
                <img
                    src="https://images.pexels.com/photos/2489986/pexels-photo-2489986.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                    alt="song"
                    style={{ width: '250px', height: 'auto' }}
                />
            </div>
        </Grid>
        <Grid sx={{justifyContent:'center'}}>
            <Typography variant='h4' sx={{ fontWeight: 600, paddingBottom: '8px', paddingTop: isSmallScreen && '20px'}}>
                Best of Punjabi Bae in 2022
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 500, paddingBottom: '8px' }}>
                Catch the most romantic punjabi tracks 0f 2022 #spofityWrapped
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 500, paddingBottom: '8px' }}>
                2022
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 500, paddingBottom: '8px' }}>
                75 Songs . 3 hr 45 min . 100 Follows
            </Typography>
            <Stack direction="row" spacing={2} sx={{justifyContent: isSmallScreen && 'center'}}>
                <Button variant="contained" startIcon={<ShuffleIcon />} sx={{ borderRadius: '8px', backgroundColor: theme.palette.primary[400], color: 'white' }}>
                    Shuffle
                </Button>
                <Button variant="outlined" startIcon={<LibraryAddIcon />} sx={{ borderRadius: '8px', color: theme.palette.primary[400] }}>
                    Add to library
                </Button>
            </Stack>
        </Grid>
    </Grid>
}
