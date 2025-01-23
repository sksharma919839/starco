import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import Slider from "../Components/Main/Slider";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Slider />
      <Footer />
      <Scroll />
    </>
  );
}

export default Home;
