import axios from "axios";
import React, { useEffect, useState } from "react";
import airo from "../../Media/Image/airo.png"
import Airoptabone from "./Airoptabone";
import Airoptabtwo from "./Airoptabtwo";
import Airoptabthree from "./Airoptabthree";
import Airoptabfour from "./Airoptabfour";
import Airoptabfive from "./Airoptabfive";

function Airoplus() {
  return (
    <>
      <div className="bg-[#272727]">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="text-center py-[30px]"
        >
          <h4 className="hover:text-[#ffffff] text-[32px] cursor-pointer text-[#bf8cff] transition-all duration-500">
            Plus Series
          </h4>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={airo} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Airoptabone />
        </div>
        <div className="py-[50px]">
          <Airoptabtwo />
        </div>
        <div className="py-[50px]">
          <Airoptabthree />
        </div>
        <div className="py-[50px]">
          <Airoptabfour />
        </div>
        <div className="py-[50px]">
          <Airoptabfive />
        </div>
      </div>
    </>
  );
}

export default Airoplus;
