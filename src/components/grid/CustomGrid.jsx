import * as React from 'react';
import Grid from '@mui/material/Grid';
import { CustomCard } from '../card/CustomCard';
import { useMediaQuery } from '@mui/material';

export const CustomGrid = ({ data }) => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const GridCompStyle = {
        px: isSmallScreen ? '0px' : '20px', 
        py: '16px'
    }
    return <>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 6, sm: 12, md: 10, lg: 14 }} color="white" sx={GridCompStyle}>
            {data?.map((album) => (
                <Grid key={album.id} item xs={12/2} sm={12/3} md={12/4} lg={12/6} xl={12/8}>
                    <CustomCard data={album} />
                </Grid>
            ))}
        </Grid>
    </>
}