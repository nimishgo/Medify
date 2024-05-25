// Bookings.jsx
import { useHospitals } from "../utils/useHospitals";

import hospitalIcon from "../assets/hospitalicon.png";
import { useEffect, useState } from "react";

export default function Bookings() {
  const { submissions } = useHospitals();
  const [searchHospital, setHospital] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    if (submissions) {
      setHospital(submissions);
    }
  }, [submissions]);

  return (
    <div className="bg-white flex flex-col justify-center items-center py-10">
      <h1 className="text-customBlue-500 text-4xl font-bold py-8">
        All Bookings
      </h1>
      <div className="py-4">
        <label htmlFor="inputText" className="text-2xl">
          Search :{" "}
        </label>
        <input
          id="inputText"
          type="text"
          name="search"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setHospital(
              submissions.filter((x) =>
                x.hospitalName
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
          }}
          placeholder="enter hospital name"
          className="text-lg mx-4 border-2 border-solid border-slate-100 p-2 rounded-lg"
        />
      </div>
      {searchHospital.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <ul className="space-y-10">
          {searchHospital.map((submission, index) => (
            <li
              key={index}
              className="flex w-[100%] shadow-xl border-black border-2 border-solid p-2 rounded-xl"
            >
              <img src={hospitalIcon} alt="" className="w-32 h-32 m-4" />
              <div className="flex flex-col gap-2 px-8 font-bold">
                <p>Hospital Name: {submission.hospitalName}</p>
                <p>
                  City: {submission.city}, State: {submission.state}
                </p>
                <p>Date: {submission.selectedDate}</p>
                <p>Time: {submission.selectedTime}</p>
                <p className="bg-green-500 text-white font-bold p-1 max-w-24 rounded-lg">
                  Booked ✅{" "}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
