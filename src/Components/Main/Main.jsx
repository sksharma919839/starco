import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import first from "../../Media/Video/aon1.mp4";
import second from "../../Media/Video/rio1.mp4";
import third from "../../Media/Video/Airo.mp4";
import fourth from "../../Media/Video/kick.mp4";

function Main() {
  return (
    <>
      <div className="pt-[102px]">
        <div>
          <h1 className="text-[40px] main-h1 text-[#f5f5f7] font-medium text-center pt-[20px] pb-[6px]">
            AON MODULAR SWITCHES
          </h1>
          <h3 className="text-[28px] text-[#f5f5f7] text-center font-medium pb-[8px]"></h3>
          <div className="flex items-center justify-center">
            <Link
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              to="/aon"
              className="flex items-center text-[16px] pt-[24px] poppins transition-all duration-500 hover:text-[#bf8cff] text-[#00a2ff] z-[1]"
            >
              <span className="mr-[3px]">Know More</span>
              <FaAngleRight size={21} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="pb-[100px] sm:mt-[-68px] z-[0] flex items-center justify-center sm:w-[60%]">
            <video muted loop playsinline autoPlay>
              <source src={first} type="video/mp4" />
            </video>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <h2
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-[48px] text-[#f5f5f7] text-center font-light pb-[3px]"
          >
            RIO Switches
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-[28px] text-[#f5f5f7] text-center font-light pb-[8px]"
          >
            The New Age Modular Range
          </h3>
          <div className="flex items-center justify-center">
            <Link
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              to="/rio"
              className="flex items-center text-[16px] pt-[24px] poppins transition-all duration-500 hover:text-[#bf8cff] text-[#00a2ff] z-[1]"
            >
              <span className="mr-[3px]">Know More</span>
              <FaAngleRight size={21} />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="pb-[100px] sm:mt-[-68px] z-[0] flex items-center justify-center sm:w-[60%]">
              <video muted loop playsinline autoPlay>
                <source src={second} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <h2
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-[48px] text-[#f5f5f7] text-center font-light pb-[3px]"
          >
            Airo Switches
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-[28px] text-[#f5f5f7] text-center font-light pb-[8px]"
          ></h3>
          <div className="flex items-center justify-center">
            <Link
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              to="/airo"
              className="flex items-center text-[16px] pt-[24px] poppins transition-all duration-500 hover:text-[#bf8cff] text-[#00a2ff] z-[1]"
            >
              <span className="mr-[3px]">Know More</span>
              <FaAngleRight size={21} />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="pb-[100px] sm:mt-[-68px] z-[0] flex items-center justify-center sm:w-[60%]">
              <video muted loop playsinline autoPlay>
                <source src={third} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <h2
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-[48px] text-[#f5f5f7] text-center font-light pb-[3px]"
          >
            Kick Plates
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-[28px] text-[#f5f5f7] text-center font-light pb-[8px]"
          >
            {" "}
            Unmatched, consistent quality material
          </h3>
          <div className="flex items-center justify-center">
            <Link
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              to="/airo"
              className="flex items-center text-[16px] pt-[24px] poppins transition-all duration-500 hover:text-[#bf8cff] text-[#00a2ff] z-[1]"
            >
              <span className="mr-[3px]">Know More</span>
              <FaAngleRight size={21} />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="pb-[100px] sm:mt-[-68px] z-[0] flex items-center justify-center sm:w-[60%]">
              <video muted loop playsinline autoPlay>
                <source src={fourth} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
