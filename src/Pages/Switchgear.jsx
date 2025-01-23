import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import Switchgears from "../Components/Switchgear/Switchgears";

function Switchgear() {
  return (
    <>
      <Navbar />
      <Switchgears />
      <div className="sm:mt-0 mt-[40px]"></div>
      <Footer />
      <Scroll />
    </>
  );
}

export default Switchgear;
