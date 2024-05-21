import { Box, Button, Container, Flex, Heading } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import HeroImage from "../assets/hero_image.png";

export default function SearchContainer() {
  const [states, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [cities, setCities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [filterStates, setFilteredStates] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const fetchState = async () => {
    const API = "https://meddata-backend.onrender.com/states";
    const stateJson = await fetch(API);
    const stateList = await stateJson.json();
    setState(stateList);
    setFilteredStates(stateList);
  };

  const fetchCity = async (input) => {
    const API = `https://meddata-backend.onrender.com/cities/${input}`;
    const cityJson = await fetch(API);
    const cityList = await cityJson.json();
    setCities(cityList);
  };

  const filteredStates = (search) => {
    return states.filter((state) =>
      state.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredCities = (citySearch) => {
    return cities.filter((city) =>
      city.toLowerCase().includes(citySearch.toLowerCase())
    );
  };

  const fetchHospitals = async (state, city) => {
    const API = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
    const hospitalJson = await fetch(API);
    const hospitalList = await hospitalJson.json();
    setHospitals(hospitalList);
    console.log(hospitalList); // Log the fetched hospital list directly
  };

  useEffect(() => {
    fetchState();
  }, []);

  useEffect(() => {
    if (search) {
      fetchCity(search);
    }
  }, [search]);

  return (
    <Container size="4">
      <Flex className="justify-between px-8">
        <Flex className="w-2/6 flex-col gap-2">
          <Heading>Skip the travel! Find Online</Heading>
          <Heading>
            Medical <span className="text-customBlue-500">Centers!</span>
          </Heading>
          <Heading size="2" className="text-slate-400">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Heading>
        </Flex>
        <Box className="w-2/6">
          <img src={HeroImage} alt="Doctor img" />
        </Box>
      </Flex>
      <form
        className="flex w-full justify-between items-center mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          fetchHospitals(search, citySearch);
          console.log(hospitals); // Explicitly call fetchHospitals on form submit
        }}
      >
        <div className="relative inline-block bg-white mb-4 w-1/3">
          <div
            className="flex items-center p-2 w-full"
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <MagnifyingGlassIcon height="16" width="16" />
            <input
              type="text"
              placeholder="Search the States"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setFilteredStates(filteredStates(e.target.value));
              }}
              onClick={() => setIsOpen(true)}
              onFocus={() => setIsOpen(true)}
              className="border-none outline-none ml-2 flex-grow"
              required
            />
          </div>
          {isOpen && (
            <Flex
              className="absolute bg-white border border-gray-300 mt-1 w-full flex-col max-h-36 overflow-y-auto z-10"
              onMouseLeave={() => setIsOpen(false)}
            >
              {filterStates.map((x) => (
                <button
                  className="cursor-pointer block hover:bg-gray-200 p-2 text-left"
                  key={x}
                  data-value={x}
                  onClick={(e) => {
                    setSearch(e.target.dataset.value);
                    setIsOpen(false);
                  }}
                >
                  {x}
                </button>
              ))}
            </Flex>
          )}
        </div>

        <div className="relative inline-block bg-white mb-4 w-1/3">
          <div
            className="flex items-center p-2 w-full"
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <MagnifyingGlassIcon height="16" width="16" />
            <input
              type="text"
              placeholder="Search the Cities"
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
              onClick={() => setIsCityOpen(true)}
              onFocus={() => setIsCityOpen(true)}
              disabled={cities.length === 0}
              className="border-none outline-none ml-2 flex-grow"
              required
            />
          </div>
          {isCityOpen && (
            <Flex
              className="absolute bg-white border border-gray-300 mt-1 w-full flex-col max-h-36 overflow-y-auto z-10"
              onMouseLeave={() => setIsCityOpen(false)}
            >
              {filteredCities(citySearch).map((city) => (
                <button
                  className="cursor-pointer block hover:bg-gray-200 p-2 text-left"
                  key={city}
                  data-value={city}
                  onClick={(e) => {
                    setCitySearch(e.target.dataset.value);
                    setIsCityOpen(false);
                  }}
                >
                  {city}
                </button>
              ))}
            </Flex>
          )}
        </div>

        <Button type="submit" className="w-1/6">
          Search
        </Button>
      </form>
      {hospitals.map((e, index) => {
        console.log(e);
        return <div key={index}>{e["Hospital Name"]}</div>;
      })}
    </Container>
  );
}
