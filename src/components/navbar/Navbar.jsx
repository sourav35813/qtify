import { ClassNames } from "@emotion/react";
import Logo from "./Logo";
import styles from "./styles.module.css"
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
    const theme = useTheme();
    return (
        <div className={styles.container}>
            <Logo />
            <Button color="customBlack" variant="contained" sx={{ color: theme.palette.primary[400] }}>Give Feedback</Button>
        </div>
    )
}

export default Navbar;