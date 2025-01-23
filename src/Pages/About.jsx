import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import Aboutmain from "../Components/About/Aboutmain";
import Aboutabout from "../Components/About/Aboutabout";
import Aboutmission from "../Components/About/Aboutmission";

function About() {
  return (
    <>
      <Navbar />
      <Aboutmain />
      <Aboutabout />
      <Aboutmission />
      <Footer />
      <Scroll />
    </>
  );
}

export default About;
