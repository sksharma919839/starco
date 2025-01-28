import React from "react";
import first from "../../Media/Image/about-1.png";

function Aboutabout() {
  return (
    <>
      <div className="bg-[#272727] pt-[100px]">
        <div className="pb-[100px] md:flex items-center justify-evenly px-[20px]">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] overflow-hidden about-img mx-[30px]"
          >
            <img src={first} alt="" />
          </div>
          <div className="px-[20px]">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="mb-[20px] md:py-0 py-[30px]"
            >
              <h2 className="text-[40px] text-[#f5f5f7] font-thin">
                OUR JOURNEY
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <p className="text-[16px] text-[#c4c4c4] transition-all duration-500 hover:text-[#bf8cff]">
                Every sunset is an opportunity to reset. Every sunrise
                <br className="sm:block hidden" /> begins with new eyes. With
                those new eyes and <br className="sm:block hidden" /> new vision
                Late Shree Harshadbhai R. Shah, in year{" "}
                <br className="sm:block hidden" /> 1986 ventured into world of
                manufacturing of Electrical <br className="sm:block hidden" />{" "}
                Accessories. With his decades of experience and vast{" "}
                <br className="sm:block hidden" /> knowledge, he was able to
                launch wide arrays of <br className="sm:block hidden" />
                PRODUCTS & various RANGES under brand Name" STRACO",
                <br /> which synonyms with "Quality and Trust"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutabout;
