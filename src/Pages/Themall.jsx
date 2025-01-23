import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import Themalls from "../Components/Themall/Themalls";

function Themall() {
  return (
    <>
      <Navbar />
      <Themalls />
      <Footer />
      <Scroll />
    </>
  );
}

export default Themall;
