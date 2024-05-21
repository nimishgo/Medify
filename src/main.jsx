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
      grayColor="sand"
      panelBackground="solid"
      radius="large"
    >
      <App />
    </Theme>
  </React.StrictMode>
);
