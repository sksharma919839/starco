import React, { useState } from "react";
import { Link } from "react-router-dom";
import aon from "../../Media/Video/aon1.mp4";
import airo from "../../Media/Video/Airo.mp4";
import rio from "../../Media/Video/rio1.mp4";
import airsilver from "../../Media/Image/airsilver.png";
import arion from "../../Media/Image/airon.png";

function Switches() {
  const [opentab, setOpentab] = useState(0);

  const tabClick = (index) => {
    setOpentab(index);
  };
  return (
    <>
      <div className="pt-[94px]">
        <div className=" relative">
          {opentab === 0 && (
            <div>
              <video muted loop playsinline autoPlay>
                <source src={aon} type="video/mp4" />
              </video>
            </div>
          )}
          {opentab === 1 && (
            <div>
              <video muted loop playsinline autoPlay>
                <source src={aon} type="video/mp4" />
              </video>
            </div>
          )}
          {opentab === 2 && (
            <div>
              <video muted loop playsinline autoPlay>
                <source src={rio} type="video/mp4" />
              </video>
            </div>
          )}
          {opentab === 3 && (
            <div>
              <video muted loop playsinline autoPlay>
                <source src={aon} type="video/mp4" />
              </video>
            </div>
          )}
          {opentab === 4 && (
            <div>
              <video muted loop playsinline autoPlay>
                <source src={airo} type="video/mp4" />
              </video>
            </div>
          )}
        </div>

        <div className="pt-[30px] pl-[60px] absolute lg:mt-[-710px] md:mt-[-500px] sm:mt-[-400px] mt-[-260px]">
          <Link to="/aon">
            <button
              className={
                opentab === 0
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(0)}
            >
              AON Switch
            </button>
          </Link>
          <br />
          <Link to="/airsilver">
            <button
              className={
                opentab === 1
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[20px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[20px]"
              }
              onMouseEnter={() => tabClick(1)}
            >
              Air Silver
            </button>
          </Link>
          <br />
          <Link to="/rio">
            <button
              className={
                opentab === 2
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(2)}
            >
              RIO Switch
            </button>
          </Link>
          <br />
          <Link to="/airon">
            <button
              className={
                opentab === 3
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(3)}
            >
              Airon Switch
            </button>
          </Link>
          <br />
          <Link to="/airo">
            <button
              className={
                opentab === 4
                  ? "text-[#f5f5f7] text-[32px] font-thin pt-[30px]"
                  : "text-[#6e6e6e] text-[32px] font-thin pt-[30px]"
              }
              onMouseEnter={() => tabClick(4)}
            >
              AIRO Switch
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Switches;
