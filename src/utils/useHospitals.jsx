/* eslint-disable react/prop-types */
// HospitalsContext.js
import { createContext, useContext, useEffect, useState } from "react";

const HospitalsContext = createContext();

export const useHospitals = () => useContext(HospitalsContext);

export const HospitalsProvider = ({ children }) => {
  const [hospitals, setHospitals] = useState([]);
  const [submissions, setSubmissions] = useState(() => {
    const savedSubmissions = localStorage.getItem("submissions");
    return savedSubmissions ? JSON.parse(savedSubmissions) : [];
  });

  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }, [submissions]);

  return (
    <HospitalsContext.Provider
      value={{ hospitals, setHospitals, submissions, setSubmissions }}
    >
      {children}
    </HospitalsContext.Provider>
  );
};
