import axios from "axios";
import React, { useEffect, useState } from "react";
import Flextable1 from "./Flextable1";
import Flextable2 from "./Flextable2";
import Flextable3 from "./Flextable3";
import Flextable4 from "./Flextable4";
import flex from "../../Media/Image/flex.png"

function Flexs() {

  return (
    <>
      <div className="py-[94px] bg-[#272727]">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex items-center justify-center py-[30px]"
        >
          <h2 className="hover:text-[#bf8cff] text-[32px] cursor-pointer text-[#ffffff] transition-all duration-500 text-center">
            Flex Box
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={flex} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Flextable1 />
        </div>
        <div className="py-[50px]">
          <Flextable2 />
        </div>
        <div className="py-[50px]">
          <Flextable3 />
        </div>
        <div className="py-[50px]">
          <Flextable4 />
        </div>
      </div>
    </>
  );
}

export default Flexs;
