import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from "@emotion/react";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const AlbumTable = () => {
    const theme = useTheme();
    return (
        <TableContainer component={Paper} sx={{ marginTop: "40px", marginBottom: '80px', backgroundColor: theme.palette.customBlack.main }}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}>Title</TableCell>
                        <TableCell sx={{ color: 'white' }}>Arist</TableCell>
                        <TableCell sx={{ color: 'white' }}>Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: 'white' }} component="th" scope="row">
                                <div style={{ display: 'flex', alignItems: 'center'}}>
                                    <div style={{ width: '60px', height: '60px', overflow: 'hidden', position: 'relative', borderRadius: '10px' }}>
                                        <img
                                            src="https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                                            alt="song"
                                            // style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                    <div style={{paddingLeft: "15px"}}>
                                    {row.name}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell sx={{ color: 'white' }}>{row.calories}</TableCell>
                            <TableCell sx={{ color: 'white' }}>{row.fat}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
