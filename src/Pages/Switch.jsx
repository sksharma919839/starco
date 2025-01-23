import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import Switches from "../Components/Switches/Switches";

function Switch() {
  return (
    <>
      <Navbar />
      <Switches />
      <div className="sm:mt-0 mt-[100px]"></div>
      <Footer />
      <Scroll />
    </>
  );
}

export default Switch;
