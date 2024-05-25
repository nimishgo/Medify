import Carousel from "./Carousel/Carousel";
import ad1 from "../assets/ad-1.png";
import ad2 from "../assets/ad-2.png";
import { Flex } from "@radix-ui/themes";

const AdsCarousel = () => {
  const courses = [
    { img: ad1 },
    { img: ad2 },
    { img: ad1 },
    { img: ad2 },
    { img: ad1 },
    { img: ad2 },
  ];

  return (
    <Flex className="flex-col justify-center items-center bg-white w-full pb-16 pt-52 ">
      <Carousel courses={courses} />
    </Flex>
  );
};

export default AdsCarousel;
