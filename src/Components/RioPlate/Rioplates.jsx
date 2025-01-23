import React, { useEffect, useState } from "react";
import Rioplatetable from "./Rioplatetable";
import axios from "axios";
import rioplate from "../../Media/Image/rioplate.png"

function Rioplates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/rioplateimage/")
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
          <h2 className="hover:text-[#C88887] text-[32px] cursor-pointer text-[#ffffff] transition-all duration-500 text-center">
            Rio Modular Plates
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:w-[451px] product-img mx-[30px]"
          >
            <img src={rioplate} alt="" />
          </div>
        </div>
        <div className="py-[50px]">
          <Rioplatetable />
        </div>
      </div>
    </>
  );
}

export default Rioplates;
