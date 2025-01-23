import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import Mcbs from "../Components/MCB/Mcbs";

function Mcb() {
  return (
    <>
      <Navbar />
      <Mcbs />
      <Footer />
      <Scroll />
    </>
  );
}

export default Mcb;
