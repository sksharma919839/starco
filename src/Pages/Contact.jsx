import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import Contacthero from "../Components/ContactMain/Contacthero";
import Contacts from "../Components/ContactMain/Contacts";

function Contact() {
  return (
    <>
      <Navbar />
      <Contacthero />
      <Contacts />
      <Footer />
      <Scroll />
    </>
  );
}

export default Contact;
