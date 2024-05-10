import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomCard } from '../card/CustomCard';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import { GenreContext } from '../contexts/ContextForGenre';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery } from '@mui/material';

const SwiperComp = ({ data, isSongsSection }) => {

  //for context
  const { selectedGenre, setSelectedGenre } = useContext(GenreContext);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const theme = useTheme();
  const swiperStyle = {
    paddingLeft: isSmallScreen ? '0px' : '20px',
    paddingRight: isSmallScreen ? '0px' : '20px',
    color: "white",
    paddingTop: "15px"
  };
  const swiperSlideStyle = {
    margin:'0',
    maxWidth:'160px'
  }
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={"auto"}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={swiperStyle}
    >
      {
        isSongsSection ?
          (data?.map((album) => {
            if (selectedGenre === "all") {
              return (
                <SwiperSlide key={album.id} style={swiperSlideStyle}>
                  <CustomCard data={album} isSongsSection={true} />
                </SwiperSlide>
              )
            } else if (selectedGenre === album.genre.key) {
              return (
                <SwiperSlide key={album.id} style={swiperSlideStyle}>
                  <CustomCard data={album} isSongsSection={true} />
                </SwiperSlide>
              )
            }
          }
          )) :
          (
            data?.map((album) =>
              <SwiperSlide key={album.id} style={swiperSlideStyle}>
                <CustomCard data={album} />
              </SwiperSlide>
            )
          )
      }
    </Swiper>
  );
};

export { SwiperComp };