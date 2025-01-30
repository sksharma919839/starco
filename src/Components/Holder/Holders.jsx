import React, { useEffect, useState } from "react";
import Holdertable1 from "./Holdertable1";
import Holdertable2 from "./Holdertable2";
import Holdertable3 from "./Holdertable3";
import Holdertable4 from "./Holdertable4";
import Holdertable5 from "./Holdertable5";
import Holdertable6 from "./Holdertable6";
import Holdertable7 from "./Holdertable7";
import Holdertable8 from "./Holdertable8";
import Holdertable9 from "./Holdertable9";
import holder from "../../Media/Image/holder.png"
import axios from "axios";

function Holders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/holderimage/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
            Supported Accessories
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={holder} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Holdertable1 />
        </div>
        <div className="py-[50px]">
          <Holdertable2 />
        </div>
        <div className="py-[50px]">
          <Holdertable3 />
        </div>
        <div className="py-[50px]">
          <Holdertable4 />
        </div>
        <div className="py-[50px]">
          <Holdertable5 />
        </div>
        <div className="py-[50px]">
          <Holdertable6 />
        </div>
        <div className="py-[50px]">
          <Holdertable7 />
        </div>
        <div className="py-[50px]">
          <Holdertable8 />
        </div>
        <div className="py-[50px]">
          <Holdertable9 />
        </div>
      </div>
    </>
  );
}

export default Holders;
