import axios from "axios";
import React, { useEffect, useState } from "react";
import Airod from "../../Media/Image/airod.png"
import Airodtableone from "./Airodtableone";
import Airotabletwo from "./Airotabletwo";
import Airodtablethree from "./Airodtablethree";
import Airodtablefour from "./Airodtablefour";

function Airos() {
  return (
    <>
      <div className="py-[94px] bg-[#272727]">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="text-center py-[30px]"
        >
          <h2 className="hover:text-[#bf8cff] text-[32px] cursor-pointer text-[#ffffff] transition-all duration-500">
            Airo Switches
          </h2>
          <h4 className="hover:text-[#ffffff] text-[26px] cursor-pointer text-[#bf8cff] transition-all duration-500">
            Deluxe Series
          </h4>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={Airod} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Airodtableone />
        </div>
        <div className="py-[50px]">
          <Airotabletwo />
        </div>
        <div className="py-[50px]">
          <Airodtablethree />
        </div>
        <div className="py-[50px]">
          <Airodtablefour />
        </div>
      </div>
    </>
  );
}

export default Airos;
