import axios from "axios";
import React, { useEffect, useState } from "react";
import Kicktable from "./Kicktable";
import kick from "../../Media/Image/kick.png"

function Kicks() {

  return (
    <>
      <div className="py-[94px] bg-[#272727]">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex items-center justify-center py-[30px]"
        >
          <h2 className="hover:text-[#bf8cff] text-[32px] cursor-pointer text-[#ffffff] transition-all duration-500">
            KICK Modular Plates
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={kick} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Kicktable />
        </div>
      </div>
    </>
  );
}

export default Kicks;
