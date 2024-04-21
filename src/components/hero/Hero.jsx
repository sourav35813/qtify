import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import Stack from "@mui/material/Stack";
import HeroImage from "../../assets/hero_headphones.png"

const Hero = () => {
    const theme = useTheme();
    return <>
        <Box display="flex" alignItems="center" justifyContent="center" height="270px" color="white" backgroundColor={theme.palette.customBlack.main}>
            <Stack display="flex" alignItems="center" sx={{p:'20px'}}>
                <Typography variant="h4" component="h2" fontWeight={600} sx={{py:'5px'}}>
                    100 Thousand Songs, ad-free
                </Typography>
                <Typography variant="h4" component="h2" fontWeight={600} sx={{py:'5px'}}>
                    Over thousands podcast episodes
                </Typography>
            </Stack>
            <img src={HeroImage} alt="" height="212px" sx={{p:'20px'}}/>
        </Box>
    </>
}

export { Hero };