import { Flex } from "@radix-ui/themes";
import {
  FaAmbulance,
  FaTablets,
  FaHospital,
  FaBone,
  FaXRay,
  FaHeartbeat,
} from "react-icons/fa";

export default function DocGrid() {
  return (
    <Flex className="justify-center items-center p-16">
      <div className="grid grid-cols-3 grid-rows-2 gap-16">
        <div className="bg-white rounded-xl w-32 h-32 flex items-center justify-center m-4 shadow-2xl">
          <FaAmbulance className="text-5xl text-blue-500" />
        </div>
        <div className="bg-white rounded-xl  w-32 h-32 flex items-center justify-center m-4 shadow-2xl">
          <FaBone className="text-5xl text-blue-500" />
        </div>
        <div className="bg-white rounded-xl w-32 h-32 flex items-center justify-center m-4 shadow-2xl">
          <FaHeartbeat className="text-5xl text-blue-500" />
        </div>
        <div className="bg-white rounded-xl w-32 h-32 flex items-center justify-center m-4 shadow-2xl">
          <FaHospital className="text-5xl text-blue-500" />
        </div>
        <div className="bg-white rounded-xl w-32 h-32 flex items-center justify-center m-4 shadow-2xl">
          <FaTablets className="text-5xl text-blue-500" />
        </div>
        <div className="bg-white rounded-xl w-32 h-32 flex items-center justify-center m-4 shadow-2xl">
          <FaXRay className="text-5xl text-blue-500" />
        </div>
      </div>
    </Flex>
  );
}
