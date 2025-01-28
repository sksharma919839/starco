import axios from "axios";
import React, { useEffect, useState } from "react";

function Airsilvertabten() {
  const tableData = [
    {
      id: 1,
      code: "1151",
      product: "1M REGULATOR / DIMMER",
      white: "160.00",
      black: "180.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "1152/A",
      product: "1M FAN STEP REGULATOR (SILVER BORDER) (FR)",
      white: "270.00",
      black: "300.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "1152/B",
      product: "1M FAN STEP REGULATOR-NEW-I TYPE (FR)",
      white: "270.00",
      black: "300.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "1153",
      product: "2M REGULATOR / DIMMER",
      white: "180.00",
      black: "200.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "1154/A",
      product: "2M STEP REGULATOR (SILVER BORDER) (FR)",
      white: "290.00",
      black: "320.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "1154/B",
      product: "2M STEP REGULATOR (FR) (NEW LOOK)",
      white: "290.00",
      black: "320.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "1154/C",
      product: "2M FAN STEP REGULATOR-NEW-I TYPE (FR)",
      white: "290.00",
      black: "320.00",
      pkg: "10",
    },
  ];
  return (
    <>
      <div
        className="flex items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div className="md:w-[80%] w-[95%]">
          <div className="flex items-center justify-center py-[30px] text-[20px] px-[20px]">
            <h6 className="text-center">1M/2M DIMMER & STEP REGULATOR</h6>
          </div>
          <table className="w-[100%]">
            <tr>
              <th></th>
              <th></th>
              <th colSpan={2}>MRP. PER N.</th>
              <th></th>
            </tr>
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[50%] w-[30%]">Product</th>
              <th>White</th>
              <th>Matt Black/Gray</th>
              <th>PKG</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#bf8cff]"
              >
                <td>{item.code}</td>
                <td>{item.product}</td>
                <td>{item.white}</td>
                <td>{item.black}</td>
                <td>{item.pkg}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Airsilvertabten;
