import React from "react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../assets/brands/amazon.png";
import amazon_vector from "../assets/brands/amazon_vector.png";
import casio from "../assets/brands/casio.png";
import moonstar from "../assets/brands/moonstar.png";
import randstar from "../assets/brands/randstad.png";
import star from "../assets/brands/star.png";
import star_people from "../assets/brands/start_people.png";

const brandsLogo = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstar,
  star,
  star_people,
];
const Brands = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-10 mb-10"
      >
        {brandsLogo.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
