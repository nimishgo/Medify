import { Box, Button, Flex } from "@radix-ui/themes";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  const fields = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
  ];
  return (
    <>
      <Flex className="p-4 flex justify-around">
        <Box className="logo justify-center cursor-pointer ">
          <Link to="/">
            <img src={logo} alt="" className="w-28" />
          </Link>
        </Box>
        <Flex gap="5" align="center">
          {fields.map((x) => (
            <Box key={x} className="font-medium">
              {x}
            </Box>
          ))}
          <Button className="cursor-pointer p-5 bg-customBlue-500">
            <Link to="bookings" className="cursor-pointer">
              My Booking
            </Link>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
