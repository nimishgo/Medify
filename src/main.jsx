import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowHospital from "./components/ShowHospital.jsx";
import Bookings from "./components/Bookings.jsx";
import Body from "./components/Body.jsx";
import { HospitalsProvider } from "./utils/useHospitals.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/hospitals/:state/:city",
        element: <ShowHospital />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HospitalsProvider>
    <RouterProvider router={appRouter} />
  </HospitalsProvider>
);
