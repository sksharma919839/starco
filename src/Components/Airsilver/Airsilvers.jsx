import axios from "axios";
import React, { useEffect, useState } from "react";
import Airsillvertable from "./Airsillvertable";
import Airsilvertabsec from "./Airsilvertabsec";
import Airsilvertabthird from "./Airsilvertabthird";
import Airsilvertabforth from "./Airsilvertabforth";
import Airsilvertabfive from "./Airsilvertabfive";
import Airsilvertabsix from "./Airsilvertabsix";
import Airsilvertabseven from "./Airsilvertabseven";
import Airsilvertabeight from "./Airsilvertabeight";
import Airsilvertabnin from "./Airsilvertabnin";
import Airsilvertabten from "./Airsilvertabten";
import Airsilvertabeleven from "./Airsilvertabeleven";
import Airsilvertabtwelve from "./Airsilvertabtwelve";
import airsilver from "../../Media/Image/airsilverb.png"

function Airsilvers() {
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
            Air Silver
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={airsilver} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Airsillvertable />
        </div>
        <div className="py-[50px]">
          <Airsilvertabsec />
        </div>
        <div className="py-[50px]">
          <Airsilvertabthird />
        </div>
        <div className="py-[50px]">
          <Airsilvertabforth />
        </div>
        <div className="py-[50px]">
          <Airsilvertabfive />
        </div>
        <div className="py-[50px]">
          <Airsilvertabsix />
        </div>
        <div className="py-[50px]">
          <Airsilvertabseven />
        </div>
        <div className="py-[50px]">
          <Airsilvertabeight />
        </div>
        <div className="py-[50px]">
          <Airsilvertabnin />
        </div>
        <div className="py-[50px]">
          <Airsilvertabten />
        </div>
        <div className="py-[50px]">
          <Airsilvertabeleven />
        </div>
        <div className="py-[50px]">
          <Airsilvertabtwelve />
        </div>
      </div>
    </>
  );
}

export default Airsilvers;
