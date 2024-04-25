import * as React from 'react';
import Grid from '@mui/material/Grid';
import { AlbumCard } from '../album/AlbumCard';

const AlbumGrid = ({ data }) => {
    return <>
        <Grid container spacing={1} color="white">
            {data?.map((album) => (
                <Grid key={album.id} item xs={12} sm={6} md={4} lg={3} xl={12/7}>
                    <AlbumCard imageSrc={album.image} name={album.title} followsCount={album.follows} />
                </Grid>
            ))}
        </Grid>
    </>
}

export { AlbumGrid };