import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannerImg1 from "../assets/banner/banner1.png";
import bannerImg2 from "../assets/banner/banner2.png";
import bannerImg3 from "../assets/banner/banner3.png";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        allowTouchMove={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper m-5 max-w-6xl"
      >
        <SwiperSlide>
          <img src={bannerImg1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={bannerImg2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={bannerImg3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
