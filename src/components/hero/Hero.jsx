import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import Stack from "@mui/material/Stack";
import HeroImage from "../../assets/hero_headphones.png"
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

const Hero = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return <Box display="flex" alignItems="center" justifyContent="center" minHeight="270px" color="white" backgroundColor={theme.palette.customBlack.main}>
                <Stack display="flex" alignItems="center" direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row' }} sx={{ p: '20px' }}>
                    <Typography align="center" 
                    variant={isSmallScreen ? 'h6' : 'h4'}  
                    fontWeight={600} sx={{ py: '5px', lineHeight: '1.5' }}>
                        100 Thousand Songs, ad-free
                        <br />
                        Over thousands podcast episodes
                    </Typography>
                    <img src={HeroImage} alt="" height={isSmallScreen ? "150px" : "212px"} sx={{ p: '20px' }} />
                </Stack>
        </Box>
}

export { Hero };