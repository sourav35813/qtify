import * as React from 'react';
import Grid from '@mui/material/Grid';
import { AlbumCard } from '../album/AlbumCard';

const AlbumGrid = ({ data }) => {
    return <>
        <Grid container spacing={1} color="white" sx={{px:'20px', py:'15px'}}>
            {data?.map((album) => (
                <Grid key={album.id} item xs={12} sm={6} md={4} lg={3} xl={12/7}>
                    <AlbumCard data={album} />
                </Grid>
            ))}
        </Grid>
    </>
}

export { AlbumGrid };