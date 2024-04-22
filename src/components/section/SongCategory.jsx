import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

const SongCategory = () => {
    const theme = useTheme();
    const [value, setValue] = useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', pb:'20px' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                sx={{textColor:'white'}}
                // textColor="white"
            >
                <Tab value="All" label="All" />
                <Tab value="Rock" label="Rock" />
                <Tab value="Pop" label="Pop" />
                <Tab value="Jazz" label="Jazz" />
                <Tab value="Blues" label="Blues" />
            </Tabs>
        </Box>
    );
}

export { SongCategory };
