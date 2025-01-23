import React, { useState } from "react";

function Aboutmission() {
  const [tab, setTab] = useState(0);
  const tabClick = (index) => {
    setTab(index);
  };
  return (
    <>
      <div className="py-[80px] overflow-hidden">
        <div className="md:flex items-center justify-evenly">
          <ul
            className="px-[20px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <li>
              <button
                className={
                  tab === 0
                    ? "font-[Poppins]  font-thin text-[40px] text-[#f5f5f7] pt-[60px] pb-[20px] lg:pr-[200px] pr-[100px]  border-r border-r-[#ffffff]"
                    : "font-[Poppins]  font-thin text-[40px] text-[#6e6e6e] pt-[60px] pb-[20px] lg:pr-[200px] pr-[100px]  border-r border-r-[#6e6e6e]"
                }
                onClick={() => {
                  tabClick(0);
                }}
              >
                OUR MISSION
              </button>
            </li>
            <li>
              <button
                className={
                  tab === 1
                    ? "font-[Poppins]  font-thin text-[40px] text-[#f5f5f7] pt-[20px] pb-[60px] lg:pr-[229.6px] pr-[129.6px]  border-r border-r-[#ffffff]"
                    : "font-[Poppins]  font-thin text-[40px] text-[#6e6e6e] pt-[20px] pb-[60px] lg:pr-[229.6px] pr-[129.6px]  border-r border-r-[#6e6e6e]"
                }
                onClick={() => {
                  tabClick(1);
                }}
              >
                OUR VISION
              </button>
            </li>
          </ul>
          <div
            className="px-[40px] sm:w-[500px] pt-[30px] md:pt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {tab === 0 && (
              <div>
                <p className="font-[Poppins] text-[16px] text-[#c4c4c4] mb-[16px] transition-all duration-500 hover:text-[#E70D2F]">
                  At STRACO, our mission is to innovate and deliver exceptional{" "}
                  products that meet the evolving needs of our customers. We are
                  committed to quality, sustainability, and excellence in
                  everything we do. Through our dedication to customer
                  satisfaction, cutting-edge technology, and responsible
                  business practices, we aim to create value for our
                  stakeholders and positively impact the communities we serve."
                </p>
              </div>
            )}
            {tab === 1 && (
              <div>
                <p className="font-[Poppins] text-[16px] text-[#c4c4c4] mb-[16px] transition-all duration-500 hover:text-[#E70D2F]">
                  STRACO envisions a future where our innovative solutions set{" "}
                  the standard in the industry, driving positive change and
                  creating a sustainable world. We strive to be a global leader,
                  recognized for our commitment to excellence, customer
                  satisfaction, and environmental stewardship. Our goal is to
                  empower our customers and communities through cutting-edge
                  products and services that enhance lives and build a better
                  tomorrow."
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutmission;
