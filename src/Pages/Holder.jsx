import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Holders from "../Components/Holder/Holders";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";

function Holder() {
  return (
    <>
      <Navbar />
      <Holders />
      <Footer />
      <Scroll />
    </>
  );
}

export default Holder;
