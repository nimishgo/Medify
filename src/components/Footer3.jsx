/* eslint-disable react/prop-types */
import { Box, Flex, Heading } from "@radix-ui/themes";
import {
  FaHandHoldingHeart,
  FaHospital,
  FaHome,
  FaStethoscope,
} from "react-icons/fa";

function CardWidget({
  Icon,
  iconColor,
  txtColor,
  bgColor,
  height,
  width,
  txt,
  msg,
}) {
  const flexClasses = `flex flex-col items-center justify-center rounded-lg p-4 shadow-2xl ${bgColor} ${height} ${width}`;

  return (
    <Box className={flexClasses}>
      <Box
        className={`flex items-center justify-center rounded-full p-4 mb-4 ${iconColor}`}
      >
        <Icon className={`${txtColor}`} size="32px" />
      </Box>
      <Heading size="2" className="text-xl text-blue-950">
        {txt}
      </Heading>
      <Heading size="3" className="text-gray-500">
        {msg}
      </Heading>
    </Box>
  );
}

export default function Footer3() {
  return (
    <Flex className="flex gap-4 w-full h-fit justify-center py-8">
      <Box className="flex flex-col justify-center items-start w-4/12 space-y-8 h-50vh">
        <p size="3" className="text-customBlue-500">
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </p>
        <Heading size="6" className="text-4xl text-blue-950">
          Our Families
        </Heading>
        <p className="py-4 leading-loose">
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </Box>

      <Box className="inline-block">
        <Flex>
          <Box className="space-y-4">
            <CardWidget
              Icon={FaHandHoldingHeart}
              iconColor="bg-blue-200"
              txtColor="text-customBlue-500"
              bgColor="bg-white"
              height="h-56"
              width="w-44"
              txt="5000+"
              msg="Happy Patients"
            />

            <CardWidget
              Icon={FaHome}
              iconColor="bg-yellow-200"
              txtColor="text-yellow-500"
              bgColor="bg-white"
              height="h-56"
              width="w-44"
              txt="200+"
              msg="Laboratories"
            />
          </Box>
          <Box className="mx-4 mt-20 space-y-4">
            <CardWidget
              Icon={FaHospital}
              iconColor="bg-rose-200"
              txtColor="text-rose-500"
              bgColor="bg-white"
              height="h-52"
              width="w-40"
              txt="200+"
              msg="Laboratories"
            />
            <CardWidget
              Icon={FaStethoscope}
              iconColor="bg-green-200"
              txtColor="text-green-500"
              bgColor="bg-white"
              height="h-52"
              width="w-40"
              txt="200+"
              msg="Expert Doctors"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
