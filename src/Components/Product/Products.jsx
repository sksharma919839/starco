import React from "react";
import switches from "../../Media/Image/Switches-p.png";
import plates from "../../Media/Image/plates.png";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="bg-[#272727] pt-[100px]">
        <div className="pb-[20px] md:flex items-center justify-evenly px-[20px]">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] overflow-hidden about-img mx-[30px]"
          >
            <Link to="/switch">
              <img src={switches} alt="" />
            </Link>
          </div>
          <div className="px-[20px]">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="mb-[20px] md:py-0 py-[30px]"
            >
              <h2 className="text-[40px] text-[#f5f5f7] font-thin">Switch</h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <Link to="/switch">
                <p className="text-[16px] text-[#c4c4c4] transition-all duration-500 hover:text-[#E70D2F]">
                  Introducing the ElectraSwitch Smart Home Switch – a
                  <br className="sm:block hidden" /> a cutting-edge solution
                  that transforms your
                  <br className="sm:block hidden" /> living space into a
                  seamlessly connected smart home.
                  <br className="sm:block hidden" /> Elevate your home
                  automation experience with <br className="sm:block hidden" />{" "}
                  this innovative switch.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="pb-[100px] md:flex items-center justify-evenly px-[20px]">
          <div className="px-[20px]">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="mb-[20px] md:py-0 py-[30px]"
            >
              <h2 className="text-[40px] text-[#f5f5f7] font-thin">Plates</h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <Link to="/plate">
                <p className="text-[16px] text-[#c4c4c4] transition-all duration-500 hover:text-[#E70D2F]">
                  Latest styling with advanced safety design features. The
                  <br className="sm:block hidden" />
                  standard range of electrical wiring accessories now{" "}
                  <br className="sm:block hidden" /> offers a competitive
                  alternative to the safety range. The{" "}
                  <br className="sm:block hidden" /> Straco wiring accessories
                  range of product provide <br className="sm:block hidden" />{" "}
                  flexibility.
                </p>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] overflow-hidden about-img mx-[30px]"
          >
            <Link to="/plate">
              <img src={plates} className="w-[300px]" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
