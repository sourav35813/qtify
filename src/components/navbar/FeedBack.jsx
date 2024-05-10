import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@emotion/react';
import { Hidden } from '@mui/material';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

export const FeedBack = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Hidden mdDown>
                <Button color="customBlack" variant="contained" onClick={handleClickOpen} sx={{ color: theme.palette.primary[400], mr: '32px', borderRadius: '8px' }}>
                    Give Feedback
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button
                    onClick={handleClickOpen}
                    color="customBlack"
                    variant="contained"
                    sx={{ color: theme.palette.customWhite.main, mr: '32px', borderRadius: '8px', height: '30px', width: '2px' }}
                >
                    <RateReviewOutlinedIcon sx={{ height: '20px', padding: '0px' }} />
                </Button>
            </Hidden>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        // const email = formJson.email;
                        console.log(formJson);
                        handleClose();
                    },
                }}
            >
                <DialogTitle sx={{ textAlign: 'center', fontWeight: '600' }}>Feedback</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Full name"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email ID"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        name="subject"
                        label="Subject"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        name="description"
                        label="Description"
                        multiline
                        rows={4}
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button sx={{ color: 'white' }} variant="contained" onClick={handleClose}>Cancel</Button>
                    <Button sx={{ color: 'white', marginRight: "18px" }} type="submit" variant="contained">Submit Feedback</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
