import React, { useState } from "react";
import Kick from "../../Media/Video/kick.mp4";
import { Link } from "react-router-dom";

function Plates() {
  const [opentab, setOpentab] = useState(1);

  const tabClick = (index) => {
    setOpentab(index);
  };
  return (
    <>
      <div className="pt-[94px]">
        <div className=" relative">
          <div>
            <video muted loop playsinline autoPlay className="w-[100%]">
              <source src={Kick} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="pt-[30px] pl-[60px] absolute lg:mt-[-710px] md:mt-[-500px] sm:mt-[-400px] mt-[-260px] ">
          <Link to="/modularglass">
            <button
              className={
                opentab === 0
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(0)}
            >
              Modular Glass
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
              Kick Modular
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
              The Mall
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
              Mall One
            </button>
          </Link>
          <br />
          <Link to="/airwood">
            <button
              className={
                opentab === 4
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(4)}
            >
              AIR Wood
            </button>
          </Link>
          <br />
          <Link to="/rioplate">
            <button
              className={
                opentab === 4
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(4)}
            >
              RIO
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Plates;
