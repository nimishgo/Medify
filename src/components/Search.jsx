import { Button, Flex } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [states, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [cities, setCities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [filterStates, setFilteredStates] = useState([]);

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

  useEffect(() => {
    fetchState();
  }, []);

  useEffect(() => {
    if (search) {
      fetchCity(search);
    }
  }, [search]);
  return (
    <form
      className="flex w-full mx-4 flex-grow justify-between items-center h-[20vh] bg-white px-20 rounded-2xl mb-[5em] shadow-xl space-x-2"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="relative inline-block bg-white w-1/3 flex-grow">
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
            className="border-none outline-none flex-grow ml-2"
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

      <div className="relative inline-block bg-white w-1/3 flex-grow">
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
      <Link
        to={search && citySearch ? `/hospitals/${search}/${citySearch}` : "/"}
        className="flex-grow"
        onClick={() => {
          if (!search && !citySearch) {
            alert("Please enter city and state!");
            return;
          }
        }}
      >
        <Button
          type="submit"
          className="w-[16vw] h-[3em] bg-customBlue-500 text-white rounded-lg"
        >
          Search
        </Button>
      </Link>
    </form>
  );
}
