import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme
      accentColor="blue"
      grayColor="grey"
      panelBackground="solid"
      radius="large"
      className=" font-sans bg-blue-100"
    >
      <App className="bg-blue-200" />
    </Theme>
  </React.StrictMode>
);
