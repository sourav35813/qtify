import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/system/Box'
import { InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const Searchbar = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return <>
        <Box sx={{display:'flex', minWidth: isSmallScreen ? '100vw' : '568px', maxWidth: isSmallScreen ? '100vw' : '568px'}}>
            <InputBase
                placeholder="Search a song of your choice"
                sx={{width:'100%', height:'48px', bgcolor:'white', py: '4px',pl: '15px', border: '1px solid black' , borderRadius: isSmallScreen ? 0 : '8px', borderTopRightRadius:0, borderBottomRightRadius:0}}
            />
            <IconButton type="button" aria-label="search" sx={{px:'14px', bgcolor:'white', border:'1px solid black', borderRadius: isSmallScreen ? 0 : '8px', borderTopLeftRadius:0, borderBottomLeftRadius:0, borderLeft:0}}>
                <SearchIcon/>
            </IconButton>
        </Box>

    </>
}

export { Searchbar };