import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AlbumCard } from '../album/AlbumCard';
import { useTheme } from '@emotion/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperComp = () => {
  const theme = useTheme();
  const swiperStyle = {
    paddingLeft: '20px',
    paddingRight: '20px',
    color: "white",
    paddingTop:"15px"
  };
  return (
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
  );
};

export { SwiperComp };