import Header from "./components/Header";
import MainFooter from "./components/MainFooter";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Theme
      accentColor="blue"
      grayColor="grey"
      panelBackground="solid"
      radius="large"
      className=" font-sans bg-blue-100"
    >
      <Header />
      <Outlet />
      <MainFooter />
    </Theme>
  );
}

export default App;
