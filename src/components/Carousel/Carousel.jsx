/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Carousel = ({ courses }) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 10,
  };

  return (
    <div className="relative w-8/12 h-full flex justify-center">
      <Swiper {...params} className="my-5 h-full">
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <img src={course.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
