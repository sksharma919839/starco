import axios from "axios";
import React, { useEffect, useState } from "react";
import Riotableone from "./Riotableone";
import Riotabletwo from "./Riotabletwo";
import Riotablethree from "./Riotablethree";
import Riotablefour from "./Riotablefour";
import Riotablefive from "./Riotablefive";
import Riotablesix from "./Riotablesix";
import Riotableseven from "./Riotableseven";
import Riotableeight from "./Riotableeight";
import Riotablenine from "./Riotablenine";
import Riotableten from "./Riotableten";
import Riotableeleven from "./Riotableeleven";
import rio from "../../Media/Image/rio.png"

function Rios() {
  return (
    <>
      <div className="py-[94px] bg-[#272727]">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex items-center justify-center py-[30px]"
        >
          <h2 className="hover:text-[#C88887] text-[32px] cursor-pointer text-[#ffffff] transition-all duration-500">
            Rio Switches
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={rio} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Riotableone />
        </div>
        <div className="py-[50px]">
          <Riotabletwo />
        </div>
        <div className="py-[50px]">
          <Riotablethree />
        </div>
        <div className="py-[50px]">
          <Riotablefour />
        </div>
        <div className="py-[50px]">
          <Riotablefive />
        </div>
        <div className="py-[50px]">
          <Riotablesix />
        </div>
        <div className="py-[50px]">
          <Riotableseven />
        </div>
        <div className="py-[50px]">
          <Riotableeight />
        </div>
        <div className="py-[50px]">
          <Riotablenine />
        </div>
        <div className="py-[50px]">
          <Riotableten />
        </div>
        <div className="py-[50px]">
          <Riotableeleven />
        </div>
      </div>
    </>
  );
}

export default Rios;
