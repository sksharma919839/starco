import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import Kicks from "../Components/Kick/Kicks";

function Kick() {
  return (
    <>
      <Navbar />
      <Kicks />
      <Footer />
      <Scroll />
    </>
  );
}

export default Kick;
