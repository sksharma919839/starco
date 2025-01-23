import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Aonswitch from "../Components/AON/Aonswitch";
import Scroll from "../Components/Scroll/Scroll";

function Aon() {
  return (
    <>
      <Navbar />
      <Aonswitch />
      <Footer />
      <Scroll />
    </>
  );
}

export default Aon;
