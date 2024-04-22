import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AlbumCard } from '../album/AlbumCard';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ClassNames } from '@emotion/react';

const Section = () => {
  const theme = useTheme();
  const swiperStyle = {
    paddingLeft: '20px',
    paddingRight: '20px',
    color: "white"
  };
  return (
    <Box sx={{ backgroundColor: theme.palette.customBlack.main, px: '30px', py: '5px', pb:'20px' }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography color="white" variant="h6" sx={{ fontWeight: 600, pb: '20px' }}>
          Top Albums
        </Typography>
        <Typography color={theme.palette.primary[400]} variant="h6" sx={{ fontWeight: 600, pb: '20px' }}>
          Show all
        </Typography>
      </Stack>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={7}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={swiperStyle}
      >
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
        <SwiperSlide><AlbumCard /></SwiperSlide>
      </Swiper>
    </Box>
  );
};

export { Section };

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { AlbumCard } from '../album/AlbumCard';
// import { Box, IconButton } from '@mui/material';
// import { useTheme } from '@emotion/react';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Height } from '@mui/icons-material';
// import styles from "./styles.module.css"

// const Section = () => {
//   const theme = useTheme();

//   const swiperStyle = {
//     paddingLeft: '20px',
//     paddingRight: '20px',
//     color: 'white'
//   };

//   const customNavigationStyle = {
//     color: theme.palette.primary[400],
//     '&:hover': {
//       color: 'darkgreen',
//     },
//   };

//   // const handlePrevClick = (swiper) => {
//   //   // swiper.slidePrev();
//   // };

//   // const handleNextClick = (swiper) => {
//   //   // swiper.slideNext();
//   // };

//   return (
//     <Box sx={{ backgroundColor: theme.palette.customBlack.main, px: '30px', py: '5px', pb: '20px' }}>
//       <Stack direction="row" justifyContent="space-between">
//         <Typography color="white" variant="h6" sx={{ fontWeight: 600, pb: '20px' }}>
//           Top Albums
//         </Typography>
//         <Typography color={theme.palette.primary[400]} variant="h6" sx={{ fontWeight: 600, pb: '20px' }}>
//           Show all
//         </Typography>
//       </Stack>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={0}
//         slidesPerView={7}
//         navigation={{
//           prevEl: '.swiper-button-prev',
//           nextEl: '.swiper-button-next',
//         }}
//         // onSwiper={(swiper) => console.log(swiper)}
//         // onSlideChange={() => console.log('slide change')}
//         style={swiperStyle}
//       >
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>
//         <SwiperSlide><AlbumCard /></SwiperSlide>

//         {/* <div className="swiper-button-prev">
//           <IconButton sx={customNavigationStyle} >
//             <NavigateBeforeIcon />
//           </IconButton>
//         </div> */}
//         <div className="swiper-button-prev" style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
//           <IconButton sx={customNavigationStyle}>
//             <NavigateBeforeIcon />
//           </IconButton>
//         </div>
//         <div className="swiper-button-next">
//           <IconButton sx={customNavigationStyle} >
//             <NavigateNextIcon />
//           </IconButton>
//         </div>
//       </Swiper>
//     </Box>
//   );
// };

// export { Section };
