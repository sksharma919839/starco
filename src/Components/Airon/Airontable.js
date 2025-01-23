import axios from "axios";
import React, { useEffect, useState } from "react";

function Airontable() {
  const tableData = [
    {
      id: 1,
      code: "A101",
      product: "10A 1 WAY SWITCH",
      white: "81.00",
      black: "90.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "A102",
      product: "10A 2 WAY SWITCH",
      white: "95.00",
      black: "104.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "A103",
      product: "10A BELL SWITCH",
      white: "90.00",
      black: "95.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "A104",
      product: "10A BELL SWITCH WITH INDICATOR",
      white: "95.00",
      black: "100.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "A105",
      product: "20A 1 WAY SWITCH",
      white: "96.00",
      black: "101.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "AA-105",
      product: "20A SWITCH WITH INDICATOR",
      white: "105.00",
      black: "111.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "A106",
      product: "32 D.P. SWITCH INDICATOR",
      white: "162.00",
      black: "171.00",
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
            <h6 className="text-center">
              AIRON-10/20/32 AMP 240V 2 MODULAR FULL ROUND SWITCHES
            </h6>
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
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#c88887]"
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

export default Airontable;
