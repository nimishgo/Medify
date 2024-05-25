import { Box, Flex, Heading, Section } from "@radix-ui/themes";
import happyCustomer from "../assets/happy-customer.png";
import AccordionDemo from "./Accordion/Accordion";
export default function Faq() {
  return (
    <Section className="bg-white text-center flex-col justify-between">
      <Heading size="4" className="text-customBlue-500 pb-8">
        Get your answer
      </Heading>
      <Heading size="8" className="text-sky-800">
        Frequently Asked Questions
      </Heading>
      <Flex className="justify-center py-12">
        <Box className="relative">
          <img src={happyCustomer} alt="" className="rounded-lg" />
          <Box className="flex absolute top-[250px] -left-20 bg-white p-4 rounded-lg w-40 shadow-2xl">
            <span className="text-4xl">🙂</span>
            <div>
              <span className="font-bold">84k+</span>
              <div>Customers</div>
            </div>
          </Box>

          <Box className="flex absolute top-[200px] -right-8 bg-white p-4 rounded-full shadow-2xl">
            <span className="text-4xl">🏥</span>
          </Box>
        </Box>
        <Box className="bg-white px-8 flex items-center">
          <AccordionDemo />
        </Box>
      </Flex>
    </Section>
  );
}
