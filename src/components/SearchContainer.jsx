import { Box, Button, Container, Flex, Heading } from "@radix-ui/themes";
import HeroImage from "../assets/hero_image.png";
import Search from "./Search";

export default function SearchContainer() {
  return (
    <Container
      size="4"
      className="flex-col justify-center items-center h-[50vh]"
    >
      <Flex className="justify-between px-10">
        <Flex className="w-5/12 flex-col gap-2 my-52 leading-6">
          <p className="text-2xl">Skip the travel! Find Online</p>
          <Heading className="text-4xl">
            Medical <span className="text-customBlue-500">Centers!</span>
          </Heading>
          <Heading size="2" className="text-slate-700 text-lg">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Heading>
          <Button className="rounded-2xl w-32 p-5">Find Centers</Button>
        </Flex>
        <Box className="w-6/12 relative top-[156px] left-[110px] shadow-none -z-40 flex-shrink">
          <img src={HeroImage} alt="Doctor img" />
        </Box>
      </Flex>
      <Search />
    </Container>
  );
}
