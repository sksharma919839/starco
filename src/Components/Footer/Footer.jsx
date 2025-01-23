import React from "react";
import { Link } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import logo from "../../Media/Image/logo.png";
import Email from "./Email";

function Footer() {
  return (
    <>
      <div>
        <div className="pt-[40px] pb-[50px] border-b-[#6e6e6e] border-b">
          <div className="flex justify-evenly flex-wrap">
            <div className="w-[300px] h-[300px] pt-[30px]">
              <h5 className="text-[#ffffff] text-[16px] mb-[20px] font-semibold">
                Featured Products
              </h5>
              <ul>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/aon">AON Switch</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/airsilver">Air Silver</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/airon">Airon</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/rio">Rio Switch</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/airo">Airo Switch</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/modularglass">Modular Glass</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/mcb">MCB</Link>
                </li>
              </ul>
            </div>
            <div className="w-[200px] pt-[30px]">
              <h5 className="text-[#ffffff] text-[16px] mb-[20px] font-semibold">
                Quick Links
              </h5>
              <ul>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] mb-[15px] transition-all duration-500 hover:text-[#E70D2F]">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] mb-[15px] transition-all duration-500 hover:text-[#E70D2F]">
                  <Link to="/product">Products</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] mb-[15px] transition-all duration-500 hover:text-[#E70D2F]">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="w-[200px] pt-[30px]">
              <h5 className="text-[#ffffff] text-[16px] mb-[20px] font-semibold">
                Category
              </h5>
              <ul>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/switch">Switches & Accessories</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/">Plates</Link>
                </li>
                <li className="text-[15px] text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F] mb-[15px]">
                  <Link to="/">Switchgear</Link>
                </li>
              </ul>
            </div>
            <div className="pt-[30px]">
              <h5 className="text-[#ffffff] text-[16px] mb-[20px] font-semibold">
                Stay in the loop
              </h5>
              <Email />
              <h5 className="text-[#ffffff] text-[16px] mb-[20px] font-semibold">
                Follow us on social
              </h5>
              <div>
                <ul className="flex">
                  <li className="h-[32px] w-[32px] bg-[#636363] rounded-full flex items-center justify-center text-[#2D2F2D] transition-all duration-500 hover:bg-[#ffffff] mr-[15px] cursor-pointer">
                    <a
                      href="https://www.facebook.com/profile.php?id=100050933978886"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="h-[32px] w-[32px] bg-[#636363] rounded-full flex items-center justify-center text-[#2D2F2D] transition-all duration-500 hover:bg-[#ffffff] mr-[15px] cursor-pointer">
                    <a href="/">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="h-[32px] w-[32px] bg-[#636363] rounded-full flex items-center justify-center text-[#2D2F2D] transition-all duration-500 hover:bg-[#ffffff] mr-[15px] cursor-pointer">
                    <a href="/">
                      <FaSquareInstagram />
                    </a>
                  </li>
                  <li className="h-[32px] w-[32px] bg-[#636363] rounded-full flex items-center justify-center text-[#2D2F2D] transition-all duration-500 hover:bg-[#ffffff] mr-[15px] cursor-pointer">
                    <a href="/">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[50px]">
          <div className="flex justify-between px-[75px] flex-wrap">
            <div className="mt-[30px]">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="mt-[30px]">
              <h5 className="text-[#ffffff] text-[16px] mb-[20px] font-semibold">
                Email
              </h5>
              <Link
                to="mailto:hello@straco.co.in"
                className="text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F]"
              >
                hello@straco.co.in
              </Link>
              <br />
              <Link
                to="mailto:straco.shah@gmail.com"
                className="text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F]"
              >
                straco.shah@gmail.com
              </Link>
            </div>
            <div className="mt-[30px]">
              <h5 className="text-[#ffffff] text-[16px] mb-[20px] font-semibold">
                Call
              </h5>
              <Link
                to="tel:+919699201772"
                className="text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F]"
              >
                +91 9699201772
              </Link>
              <br />
              <Link
                to="tel:+91 9326077410"
                className="text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F]"
              >
                +91 9326077410
              </Link>
            </div>
            <div className="mt-[30px]">
              <h5 className="text-[#ffffff] text-[16px] mb-[20px] font-semibold">
                Corporate Office
              </h5>
              <Link
                to="https://maps.app.goo.gl/xuSmMPwXRvZnb1Xh7"
                target="_blank"
                className="text-[#6e6e6e] transition-all duration-500 hover:text-[#E70D2F]"
              >
                M/s. SHAH INDUSTRIES <br /> Plot No: 53, Papdi Industrial
                Estate, <br /> Umela Phata, Vasai (West), <br />{" "}
                Dist.Palghar-401202 Mumbai, <br /> Maharashtra, India.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
