import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Mallones from "../Components/Mallone/Mallones";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";

function Mallone() {
  return (
    <>
      <Navbar />
      <Mallones />
      <Footer />
      <Scroll />
    </>
  );
}

export default Mallone;
