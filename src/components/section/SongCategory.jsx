import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BorderAllRounded, BorderRight, Height } from '@mui/icons-material';


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        // backgroundColor: 'transparent',
        height: '3px',
    },
    '& .MuiTabs-indicatorSpan': {
        // maxWidth: 10,
        // width: '100%',
        // backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: '600',
        fontSize: '16px',
        // marginRight: theme.spacing(1),
        color: '#ffff',
        '&.Mui-selected': {
            color: '#ffff',
        },
        '&.Mui-focusVisible': {
            //   backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

const SongCategory = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            //   aria-label="styled tabs example"
            sx={{ pb: '10px' }}
        >
            <StyledTab label="All" />
            <StyledTab label="Rock" />
            <StyledTab label="Pop" />
            <StyledTab label="Jazz" />
            <StyledTab label="Blues" />
        </StyledTabs>

    );
}


export { SongCategory };




// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { useTheme } from '@emotion/react';
// import { useState } from 'react';

// const SongCategory = () => {
//     const theme = useTheme();
//     const [value, setValue] = useState('All');
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <Box color="red" sx={{ width: '100%', pb:'20px' }}>
//             <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 textColor="secondary"
//                 color="white"
//             >
//                 <Tab value="All" label="All" color="white" />
//                 <Tab value="Rock" label="Rock" color="white" />
//                 <Tab value="Pop" label="Pop" />
//                 <Tab value="Jazz" label="Jazz" />
//                 <Tab value="Blues" label="Blues" />
//             </Tabs>
//         </Box>
//     );
// }

// export { SongCategory };
