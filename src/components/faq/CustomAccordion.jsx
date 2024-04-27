import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Icon } from '@mui/material';

export const CustomAccordion = ({ data }) => {
    const theme = useTheme();
    const accordionStyle = {
        backgroundColor: "white",
        color: "white",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: "1px",
        padding: "0.5px",
        marginBottom: "18px",
        borderRadius: '8px'
    }
    return <>
        <Accordion style={accordionStyle}>
            <AccordionSummary
                expandIcon={<Icon sx={{ color: theme.palette.primary[400], paddingRight:'6px'}}><KeyboardArrowDownIcon fontSize="large"/></Icon>}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ backgroundColor: theme.palette.customBlack.main, paddingLeft:"20px", paddingTop:"5px", paddingBottom:"5px", borderRadius: '7px' }}
            >
                <Typography variant="subtitle1">{data.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "white" }}>
                <Typography color="black">
                    {data.answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    </>
}