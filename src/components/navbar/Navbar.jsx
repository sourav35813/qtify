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
import { FeedBack } from "./FeedBack";
const Navbar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <>
            <div className={styles.container}>
                <Hidden mdUp>
                        <Logo />
                        <FeedBack />
                </Hidden>
                <Hidden mdDown>
                    <Logo />
                    <Searchbar />
                    <FeedBack />
                </Hidden>
            </div>
        </>
    )
}

export default Navbar;