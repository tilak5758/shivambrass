import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../css/swiper.css'


import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../assets/img_1.jpg';
import slide_image_2 from '../../assets/img_2.jpg';
import slide_image_3 from '../../assets/img_3.jpg';
import slide_image_4 from '../../assets/img_4.jpg';
import slide_image_5 from '../../assets/img_5.jpg';


function MySwiper() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
       

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
             <FaArrowLeft/>
          </div>
          <div className="swiper-button-next slider-arrow">
              <FaArrowRight/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default MySwiper;
