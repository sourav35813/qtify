import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import {CustomAccordion} from "./CustomAccordion"

export const FAQ = () => {
    const theme = useTheme();
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
        <Box color="white" sx={{ backgroundColor: theme.palette.customBlack.main, marginBottom:'80px' }}>
            <Typography variant="h3" fontWeight="600" sx={{ pt: '20px', textAlign: 'center' }}>
                FAQs
            </Typography>
            <div style={{ maxWidth: '1400px', marginLeft: "auto", marginRight: "auto", marginTop: "20px", paddingBottom: '50px', paddingLeft:'30px', paddingRight:'30px' }}>
                {
                    faqData?.map((data) =>
                        <CustomAccordion data={data} />
                    )
                }
            </div>
        </Box>
    </>
}