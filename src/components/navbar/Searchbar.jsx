import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/system/Box'
import { InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

const Searchbar = () => {
    const theme = useTheme();
    return <>
    {/* sx={{ height: '48px', pl: '15px', mt: '13px', flex: 1, border: '1px solid black', width: '568px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent:'space-between' }} */}
        <Box sx={{display:'flex'}}>
            <InputBase
                placeholder="Search a song of your choice"
                sx={{height:'48px', bgcolor:'white', py: '4px',pl: '15px', border: '1px solid black', width: '568px', borderRadius: '8px', borderTopRightRadius:0, borderBottomRightRadius:0}}
            />
            <IconButton type="button" aria-label="search" sx={{px:'14px', bgcolor:'white', border:'1px solid black', borderRadius:'8px', borderTopLeftRadius:0, borderBottomLeftRadius:0, borderLeft:0}}>
                <SearchIcon/>
            </IconButton>
        </Box>

    </>
}

export { Searchbar };