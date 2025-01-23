import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Forms from "./Forms";

function Contacts() {
  return (
    <>
      <div className="bg-[#272727] py-[100px] md:flex justify-evenly">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="sm:w-[475px] px-[20px] mx-[20px]"
        >
          <div className="pb-[60px] border-b border-b-[#6e6e6e]">
            <h2 className="text-[40px] text-[#f5f5f7] font-thin pr-[80px]">
              GET IN TOUCH WITH US
            </h2>
          </div>
          <div>
            <div className="sm:flex">
              <ul>
                <li className="flex mb-[10px] mt-[40px]">
                  <IoLocationOutline className="mt-[5px] " />
                  <Link
                    to="https://maps.app.goo.gl/1FiaZ8XhTt1aF3n7A"
                    target="_blank"
                    className="text-[#6e6e6e] ml-[20px] transition-all duration-500 hover:text-[#f5f5f7]"
                  >
                    M/s. SHAH INDUSTRIES <br /> Plot No: 53, Papdi Industrial
                    Estate, <br /> Umela Phata, Vasai (West),
                    <br />
                    Dist.Palghar-401202 Mumbai, <br /> Maharashtra, India.
                  </Link>
                </li>
                <li className="flex  mb-[10px]">
                  <RiMailSendLine className="mt-[5px]" />
                  <Link
                    to="mailto:hello@straco.co.in"
                    className="text-[#6e6e6e] ml-[20px] transition-all duration-500 hover:text-[#f5f5f7]"
                  >
                    hello@straco.co.in
                  </Link>
                </li>
                <li className="flex  mb-[10px]">
                  <LuPhoneCall className="mt-[5px]" />
                  <Link
                    to="tel:+919699201772"
                    className="text-[#6e6e6e] ml-[20px] transition-all duration-500 hover:text-[#f5f5f7]"
                  >
                    +91 9699201772
                  </Link>
                </li>
              </ul>
              <ul className="pl-[25px]">
                <li className="mt-[40px]">
                  <Link to="/" className="flex items-center contact-icon">
                    <div className="w-[32px] h-[32px] text-[#f5f5f7] bg-[#6e6e6e] rounded-full flex items-center justify-center transition-all duration-500 icons">
                      <FaFacebook />
                    </div>
                    <span className="text-[#6e6e6e] pl-[10px] transition-all duration-500">
                      Facebook
                    </span>
                  </Link>
                </li>
                <li className="mt-[20px]">
                  <Link to="/" className="flex items-center contact-icon">
                    <div className="w-[32px] h-[32px] text-[#f5f5f7] bg-[#6e6e6e] rounded-full flex items-center justify-center transition-all duration-500 icons">
                      <FaTwitter />
                    </div>
                    <span className="text-[#6e6e6e] pl-[10px] transition-all duration-500">
                      Twitter
                    </span>
                  </Link>
                </li>
                <li className="mt-[20px]">
                  <Link to="/" className="flex items-center contact-icon">
                    <div className="w-[32px] h-[32px] text-[#f5f5f7] bg-[#6e6e6e] rounded-full flex items-center justify-center transition-all duration-500 icons">
                      <FaInstagram />
                    </div>
                    <span className="text-[#6e6e6e] pl-[10px] transition-all duration-500">
                      Instagram
                    </span>
                  </Link>
                </li>
                <li className="mt-[20px]">
                  <Link to="/" className="flex items-center contact-icon">
                    <div className="w-[32px] h-[32px] text-[#f5f5f7] bg-[#6e6e6e] rounded-full flex items-center justify-center transition-all duration-500 icons">
                      <FaYoutube />
                    </div>
                    <span className="text-[#6e6e6e] pl-[10px] transition-all duration-500">
                      Youtube
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <Forms />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
