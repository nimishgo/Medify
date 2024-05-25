import Carousel from "./Carousel/Carousel";
import drahmed from "../assets/doctor-ahmad.png";
import drankur from "../assets/doctor-ankur.png";
import drheena from "../assets/doctor-heena.png";

import { Flex, Heading } from "@radix-ui/themes";

const DrCarousel = () => {
  const courses = [
    { img: drahmed },
    { img: drankur },
    { img: drheena },
    { img: drahmed },
    { img: drankur },
    { img: drheena },
  ];

  return (
    <Flex className="flex-col justify-center items-center bg-white w-full py-16">
      <Heading size="6" className="text-3xl my-4 text-blue-950">
        Our Medical Specialist
      </Heading>
      <Carousel courses={courses} />
    </Flex>
  );
};

export default DrCarousel;
