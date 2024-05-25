/* eslint-disable react/prop-types */
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

const TimeCarousel = ({ getNext7Days }) => {
  const params = {
    slidesPerView: 3,
  };
  console.log(getNext7Days);

  return (
    <div className="w-[100%] flex justify-center items-center h-[100px]">
      <Swiper
        {...params}
        modules={[Navigation, A11y]}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="px-5 h-[100px]"
      >
        {getNext7Days.map((course, index) => (
          <SwiperSlide key={index}>{course}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimeCarousel;
