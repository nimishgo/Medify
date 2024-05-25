// ShowHospital.jsx
import { Button, Container } from "@radix-ui/themes";
import hospitalIcon from "../assets/hospitalicon.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format, addDays } from "date-fns";
import TimeCarousel from "./Carousel/TimeCarousel";
import Search from "./Search";
import { useHospitals } from "../utils/useHospitals";
export default function ShowHospital() {
  // eslint-disable-next-line no-unused-vars
  const { hospitals, setHospitals, submissions, setSubmissions } =
    useHospitals();
  const [open, setOpen] = useState({});
  const [selection, setSelection] = useState([]);

  const fetchHospitals = async (state, city) => {
    const API = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
    const hospitalJson = await fetch(API);
    const hospitalList = await hospitalJson.json();
    setHospitals(hospitalList);
    setSelection(
      hospitalList.map(() => ({ selectedDate: null, selectedTime: null }))
    );
  };

  const { state, city } = useParams();
  useEffect(() => {
    if (state && city) {
      fetchHospitals(state, city);
    }
  }, [city, state]);

  const handleButtonClick = (index) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getNext7Days = () => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const dateValue = format(addDays(today, i), "EEEE, MMMM d");
      return {
        label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : dateValue,
        value: dateValue,
      };
    });
  };

  const timeSlots = [
    { label: "Morning", time: ["10:30 AM"] },
    {
      label: "Afternoon",
      time: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"],
    },
    { label: "Evening", time: ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"] },
  ];

  const handleDateClick = (index, date) => {
    setSelection((prevSelection) =>
      prevSelection.map((sel, i) =>
        i === index ? { ...sel, selectedDate: date } : sel
      )
    );
  };

  const handleTimeClick = (index, time) => {
    setSelection((prevSelection) =>
      prevSelection.map((sel, i) =>
        i === index ? { ...sel, selectedTime: time } : sel
      )
    );
  };

  const handleSubmit = (index) => {
    const selectedHospital = hospitals[index];
    const { selectedDate, selectedTime } = selection[index];
    if (selectedHospital && selectedDate && selectedTime) {
      const submissionData = {
        hospitalName: selectedHospital["Hospital Name"],
        city: selectedHospital["City"],
        state: selectedHospital["State"],
        selectedDate,
        selectedTime,
      };
      setSubmissions((prevSubmissions) => [...prevSubmissions, submissionData]);
      console.log("Submitted Data:", submissionData);
      // Reset selection state
      setSelection((prevSelection) =>
        prevSelection.map((sel, i) =>
          i === index ? { selectedDate: null, selectedTime: null } : sel
        )
      );
    } else {
      alert("Please select a date and time.");
    }
  };

  return (
    <>
      <Container
        size="4"
        className="flex flex-col justify-center items-center h-[20vh] w-[80%] my-9 mx-auto"
      >
        <Search />
      </Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="w-[100vw] flex flex-col items-center">
          <ul>
            {hospitals.map((x, index) => (
              <li
                key={index}
                className="flex flex-col shadow-md w-[50vw] rounded-2xl my-8 p-4 bg-white justify-between"
              >
                <div className="flex justify-between">
                  <div className="flex">
                    <img src={hospitalIcon} alt="" className="w-32 h-32" />
                    <div className="px-4 space-y-2">
                      <div className="text-customBlue-500 font-bold text-lg">
                        {x["Hospital Name"]}
                      </div>
                      <h6>{x["City"] + ", " + x["State"]}</h6>
                      <p className="text-xs font-bold">{x["Address"]}</p>
                      <p>
                        <span className="text-green-500 font-bold">FREE</span>{" "}
                        ₹500 Consultation fee
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-center mt-4">
                    <p className="text-green-500 py-2">Available Time</p>
                    <Button
                      className="text-white bg-customBlue-500 h-10 px-4 py-1 rounded-lg cursor-pointer hover:bg-blue-300 w-60"
                      onClick={() => handleButtonClick(index)}
                    >
                      Book free center visit
                    </Button>
                  </div>
                </div>
                {open[index] && (
                  <div className="mt-4 flex flex-col justify-center items-center">
                    <div className="flex space-x-2 w-full py-2 justify-between">
                      <TimeCarousel
                        getNext7Days={getNext7Days().map(
                          ({ label, value }, i) => (
                            <div
                              key={i}
                              className={`flex flex-col justify-center items-center p-4 cursor-pointer w-full h-full ${
                                selection[index].selectedDate === value
                                  ? "border-b-8 border-customBlue-500 bg-gray-100"
                                  : " border-solid border-b-8 border-gray-500 bg-white text-gray-950 hover:border-customBlue-500"
                              }`}
                              onClick={() => handleDateClick(index, value)}
                            >
                              {label}
                              <p className="text-green-600 z-0">
                                12 slots available
                              </p>
                            </div>
                          )
                        )}
                      />
                    </div>
                    <div className="flex flex-col w-full py-2">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot.label}
                          className="py-1 bg-white flex-grow"
                        >
                          <span className="w-[100px] inline-flex">
                            {slot.label}
                          </span>
                          {slot.time.map((time, i) => (
                            <span key={i} className="mx-4">
                              <button
                                className={`px-4 border-solid border-[1px] border-customBlue-500 rounded-md cursor-pointer ${
                                  selection[index].selectedTime === time
                                    ? "bg-customBlue-500 text-white"
                                    : " text-customBlue-500 bg-white hover:bg-customBlue-500 hover:text-white"
                                }`}
                                onClick={() => handleTimeClick(index, time)}
                              >
                                {time}
                              </button>
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                    {selection[index].selectedDate &&
                      selection[index].selectedTime && (
                        <Button
                          className="text-white bg-green-500 mt-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600"
                          onClick={() => handleSubmit(index)}
                        >
                          Submit
                        </Button>
                      )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
}
