import axios from "axios";
import React, { useEffect, useState } from "react";
import Mcbtable from "./Mcbtable";
import Mcbtable2 from "./Mcbtable2";
import Mcbtable6 from "./Mcbtable6";
import Mcbtable5 from "./Mcbtable5";
import Mcbtable4 from "./Mcbtable4";
import Mcbtable3 from "./Mcbtable3";
import mcb from "../../Media/Image/mcb.png"

function Mcbs() {

  return (
    <>
      <div className="py-[94px] bg-[#272727]">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="text-center py-[30px]"
        >
          <h2 className="hover:text-[#C88887] text-[32px] cursor-pointer text-[#ffffff] transition-all duration-500">
            MCB
          </h2>
          <h4 className="hover:text-[#ffffff] text-[26px] cursor-pointer text-[#C88887] transition-all duration-500">
            MINIATURE CIRCUIT BREAKER - MCB ISOLATOR - ELCB
          </h4>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={mcb} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Mcbtable />{" "}
        </div>
        <div className="py-[50px]">
          <Mcbtable2 />{" "}
        </div>
        <div className="py-[50px]">
          <Mcbtable3 />{" "}
        </div>
        <div className="py-[50px]">
          <Mcbtable4 />{" "}
        </div>
        <div className="py-[50px]">
          <Mcbtable5 />{" "}
        </div>
        <div className="py-[50px]">
          <Mcbtable6 />{" "}
        </div>
      </div>
    </>
  );
}

export default Mcbs;
