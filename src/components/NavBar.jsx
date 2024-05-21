import { Box, Button, Flex } from "@radix-ui/themes";
import logo from "../assets/logo.png";
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
      <Flex className="p-4 flex justify-around  ">
        <Box className="logo justify-center ">
          <img src={logo} alt="" className="w-28" />
        </Box>
        <Flex gap="5" align="center">
          {fields.map((x) => (
            <Box key={x} className="font-medium">
              {x}
            </Box>
          ))}
          <Button className="cursor-pointer p-5 bg-customBlue-500">
            My Booking
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
