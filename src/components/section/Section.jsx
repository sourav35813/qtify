import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SwiperComp } from '../swiper/SwiperComp';
import { SongCategory } from './SongCategory';
import { CustomGrid } from '../grid/CustomGrid';
import { useState, createContext } from 'react';
import { GenreContext } from '../contexts/ContextForGenre';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Section = ({ sectionName, data, isSongsSection = false }) => {
  //for context 
  const [selectedGenre, setSelectedGenre] = useState("all");

  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    if (showAll === true) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  }
  const theme = useTheme();
  const swiperStyle = {
    paddingLeft: '20px',
    paddingRight: '20px',
    color: "white"
  };
  return (
    <GenreContext.Provider value={{ selectedGenre, setSelectedGenre }}>
      <Box sx={{ backgroundColor: theme.palette.customBlack.main, px: '30px', py: '5px', pb: '20px', pt: '15px' }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="white" variant="h6" sx={{ fontWeight: 600, pb: '15px' }}>
            {sectionName}
          </Typography>
          {
            !isSongsSection &&
            <Typography onClick={handleClick} color={theme.palette.primary[400]} variant="h6" sx={{ fontWeight: 600, pb: '15px', cursor: 'pointer' }}>
              {
                showAll ? "Collapse" : "Show all"
              }
            </Typography>
          }
        </Stack>
        {
          isSongsSection && <SongCategory />
        }
        {
          isSongsSection ? (
            showAll ? <CustomGrid data={data} /> : <SwiperComp data={data} isSongsSection={true} />
          ) : (
            showAll ? <CustomGrid data={data} /> : <SwiperComp data={data} />
          )
        }
      </Box>
    </GenreContext.Provider>
  );
};

export { Section };