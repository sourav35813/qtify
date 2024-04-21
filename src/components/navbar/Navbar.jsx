import { ClassNames } from "@emotion/react";
import Logo from "./Logo";
import styles from "./styles.module.css"
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/system/Stack';
import { Searchbar } from "./Searchbar";

const Navbar = () => {
    const theme = useTheme();
    return (
        <>
            <div className={styles.container}>
                {/* <Stack> */}
                {/* direction="row" justifyContent="space-between" alignItems="center" */}
                    <Logo />
                    <Searchbar />
                    <Button
                        color="customBlack"
                        variant="contained" 
                        sx={{ color: theme.palette.primary[400], mr: '32px', borderRadius: '8px' }}>
                        Give Feedback</Button>
                {/* </Stack> */}
            </div>
        </>
    )
}

export default Navbar;