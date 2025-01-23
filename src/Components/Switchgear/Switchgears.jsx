import React, { useState } from "react";
import { Link } from "react-router-dom";
import airo from "../../Media/Video/Airo.mp4";

function Switchgears() {
  const [opentab, setOpentab] = useState(1);

  const tabClick = (index) => {
    setOpentab(index);
  };
  return (
    <>
      <div className="pt-[104px]">
        <div className=" relative">
          <div>
            <video muted loop playsinline autoPlay className="w-[100%]">
              <source src={airo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="pt-[30px] pl-[60px] absolute lg:mt-[-610px] md:mt-[-500px] sm:mt-[-400px] mt-[-260px] ">
          <Link to="/modularglass">
            <button
              className={
                opentab === 0
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(0)}
            >
              MCB
            </button>
          </Link>
          <br />
          <Link to="/kick">
            <button
              className={
                opentab === 1
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[20px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[20px]"
              }
              onMouseEnter={() => tabClick(1)}
            >
              Flex Box
            </button>
          </Link>
          <br />
          <Link to="/themall">
            <button
              className={
                opentab === 2
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(2)}
            >
              Metro
            </button>
          </Link>
          <br />
          <Link to="/mallone">
            <button
              className={
                opentab === 3
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(3)}
            >
              Accessories
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Switchgears;
