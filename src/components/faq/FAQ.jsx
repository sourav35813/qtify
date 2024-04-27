import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Icon } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";

const AccordionElement = ({ data, accordionStyle, theme }) => {
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

export const FAQ = () => {
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
    const [faqData, setFaqData] = useState();
    useEffect(() => {
        const getData = async () => {
            try {
                const url = "https://qtify-backend-labs.crio.do/faq";
                const res = await axios.get(url);
                // console.log("res: " + JSON.stringify(res.data.data));
                setFaqData(res.data.data);
            } catch (e) {
                console.log(e.response);
            }
        }
        getData();
    }, [])

    return <>
        <Box color="white" sx={{ backgroundColor: theme.palette.customBlack.main }}>
            <Typography variant="h3" fontWeight="600" sx={{ pt: '20px', textAlign: 'center' }}>
                FAQs
            </Typography>
            <div style={{ maxWidth: '1400px', marginLeft: "auto", marginRight: "auto", marginTop: "20px", marginBottom: "20px", paddingBottom: '50px', paddingLeft:'30px', paddingRight:'30px' }}>
                {
                    faqData?.map((data) =>
                        <AccordionElement data={data} accordionStyle={accordionStyle} theme={theme} />
                    )
                }
            </div>
        </Box>
    </>
}