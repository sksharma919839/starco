import React from "react";
import Plates from "../Components/Plate/Plates";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";

function Plate() {
  return (
    <>
      <Navbar />
      <Plates />
      <div className="sm:mt-0 mt-[200px]">
        <Footer />
      </div>
      <Scroll />
    </>
  );
}

export default Plate;
