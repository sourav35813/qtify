import { ClassNames } from "@emotion/react";
import Logo from "./Logo";
import styles from "./styles.module.css"
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/system/Stack';
import { Searchbar } from "./Searchbar";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import { useMediaQuery, Hidden } from '@mui/material';
import Box from "@mui/material/Box";


const Navbar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <>
            <div className={styles.container}>
                <Hidden mdUp>
                        <Logo />
                        <Button
                            color="customBlack"
                            variant="contained"
                            sx={{ color: theme.palette.customWhite.main, mr: '32px', borderRadius: '8px', height: '30px', width: '2px' }}
                        >
                            <RateReviewOutlinedIcon sx={{ height: '20px', padding: '0px' }} />
                        </Button>
                </Hidden>
                <Hidden smDown>
                    <Logo />
                    <Searchbar />
                    <Button
                        color="customBlack"
                        variant="contained"
                        sx={{ color: theme.palette.primary[400], mr: '32px', borderRadius: '8px' }}
                    >
                        Give Feedback
                    </Button>
                </Hidden>
            </div>
        </>
    )
}

export default Navbar;