import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Switch from "./Pages/Switch";
import Aon from "./Pages/Aon";
import Airsilver from "./Pages/Airsilver";
import Airon from "./Pages/Airon";
import Rio from "./Pages/Rio";
import Airo from "./Pages/Airo";
import Mglassplate from "./Pages/Mglassplate";
import Mcb from "./Pages/Mcb";
import Kick from "./Pages/Kick";
import Themall from "./Pages/Themall";
import Mallone from "./Pages/Mallone";
import Airwood from "./Pages/Airwood";
import Rioplate from "./Pages/Rioplate";
import Flex from "./Pages/Flex";
import Metro from "./Pages/Metro";
import Holder from "./Pages/Holder";
import Plate from "./Pages/Plate";
import Switchgear from "./Pages/Switchgear";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/product",
      element: <Project />,
    },
    {
      path: "/switch",
      element: <Switch />,
    },
    {
      path: "/aon",
      element: <Aon />,
    },
    {
      path: "/airsilver",
      element: <Airsilver />,
    },
    {
      path: "/airon",
      element: <Airon />,
    },
    {
      path: "/rio",
      element: <Rio />,
    },
    {
      path: "/airo",
      element: <Airo />,
    },
    {
      path: "/plate",
      element: <Plate />,
    },
    {
      path: "/modularglass",
      element: <Mglassplate />,
    },
    {
      path: "/kick",
      element: <Kick />,
    },
    {
      path: "/themall",
      element: <Themall />,
    },
    {
      path: "/mallone",
      element: <Mallone />,
    },
    {
      path: "/airwood",
      element: <Airwood />,
    },
    {
      path: "/rioplate",
      element: <Rioplate />,
    },
    {
      path: "/switchgear",
      element: <Switchgear />,
    },
    {
      path: "/mcb",
      element: <Mcb />,
    },
    {
      path: "/flexbox",
      element: <Flex />,
    },
    {
      path: "/holder",
      element: <Holder />,
    },
    {
      path: "/metro",
      element: <Metro />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
