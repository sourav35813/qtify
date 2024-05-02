import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from "@emotion/react";
import { CurrentSongContext } from '../contexts/ContextForCurrentSong';
import { useContext } from 'react';
import { Pagination } from '@mui/material';


function msToMinSec(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
    return formattedTime;
}

export const AlbumTable = ({ data }) => {
    const { currentSong, setCurrentSong } = useContext(CurrentSongContext);
    const [currentPage, setCurrentPage] = React.useState();
    const handlePageChange = (e) => {
        setCurrentPage(e);
        console.log("page: ", e);
    }
    const theme = useTheme();
    return (
        <TableContainer component={Paper} sx={{ marginTop: "40px", marginBottom: '80px', backgroundColor: theme.palette.customBlack.main }}>
            {/* <Pagination count={8} color="standard" sx={{backgroundColor:'white', color:'red'}} size="small" page={page} onClick={(e) => handlePageChange(e)}/> */}
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}>Title</TableCell>
                        <TableCell sx={{ color: 'white' }}>Arist</TableCell>
                        <TableCell sx={{ color: 'white' }}>Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.songs?.map((song) => (
                        <TableRow
                            key={song.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                            onClick={() => setCurrentSong({
                                image: song.image,
                                songTitle: song.title,
                                albumTitle: data.title,
                            })}
                        >
                            <TableCell sx={{ color: 'white' }} component="th" scope="row">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', overflow: 'hidden', position: 'relative', borderRadius: '10px' }}>
                                        <img
                                            src={song.image}
                                            alt={song.title}
                                            // song={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                    <div style={{ paddingLeft: "15px" }}>
                                        {song.title}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell sx={{ color: 'white' }}>{song.artists.join(", ")}</TableCell>
                            <TableCell sx={{ color: 'white' }}>{msToMinSec(song.durationInMs)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
