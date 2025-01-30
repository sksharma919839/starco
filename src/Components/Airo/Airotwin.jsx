import axios from "axios";
import React, { useEffect, useState } from "react";
import Airot from "../../Media/Image/airot.png"
import Airottable from "./Airottable";

function Airotwin() {

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
            Twin Series
          </h4>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={Airot} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Airottable />
        </div>
      </div>
    </>
  );
}

export default Airotwin;
