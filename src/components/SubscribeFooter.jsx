import { Box, Button, Heading, TextField } from "@radix-ui/themes";
import mobileImg from "../assets/mobile-app.png";
import arrowImg from "../assets/arrow.png";

export default function SubscribeFooter() {
  return (
    <div className="px-56 flex justify-center pt-8">
      <img src={mobileImg} alt="" className="h-4/12 w-4/12" />
      <Box className="flex">
        <Box className="inline-block pl-8 pt-3">
          <img src={arrowImg} alt="" className="h-6/12 w-8/12" />
        </Box>
        <Box className="flex-col space-y-8 pb-8">
          <Heading size="6" className="text-5xl">
            Download The
          </Heading>
          <Heading size="6" className="text-5xl">
            <span className="text-customBlue-500">Medify </span>
            App
          </Heading>
          <Heading size="2">Get the link to download the app</Heading>
          <Box className="flex space-x-4 w-72">
            <TextField.Root
              placeholder="Enter the number"
              className="border-none"
            >
              <TextField.Slot>+91</TextField.Slot>
            </TextField.Root>
            <Button>Send SMS</Button>
          </Box>
          <Box className="flex space-x-2">
            <Button className="bg-black text-neutral-50 py-6 w-36 cursor-pointer">
              <svg
                viewBox="-3 0 262 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
                className="w-5 h-5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  ></path>
                </g>
              </svg>
              Google Play
            </Button>
            <Button className="bg-black text-neutral-50  py-6 w-36 cursor-pointer">
              <svg
                fill="#fff"
                viewBox="-52.01 0 560.035 560.035"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
                </g>
              </svg>
              App Store
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
