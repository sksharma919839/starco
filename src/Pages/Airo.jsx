import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import Airos from "../Components/Airo/Airos";
import Airoplus from "../Components/Airo/Airoplus";
import Airotwin from "../Components/Airo/Airotwin";

function Airo() {
  return (
    <>
      <Navbar />
      <Airos />
      <Airoplus />
      <Airotwin />
      <Footer />
      <Scroll />
    </>
  );
}

export default Airo;
