import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
const FAQ = () => {
    const theme = useTheme();
    return <>
    <Box color="white" sx={{backgroundColor: theme.palette.customBlack.main, height:'200px', textAlign:'center'}}>
        <Typography variant="h3" fontWeight="600" sx={{pt:'20px'}}>
            FAQs
        </Typography>
         
    </Box>
    </>
}

export {FAQ};