import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AlbumCard } from './AlbumCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={3}
      slidesPerView={7}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      <SwiperSlide><AlbumCard/></SwiperSlide>
      ...
    </Swiper>
  );
};

export {Carousel};