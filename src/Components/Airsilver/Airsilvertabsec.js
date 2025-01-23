import axios from "axios";
import React, { useEffect, useState } from "react";

function Airsilvertabsec() {
  const tableData = [
    {
      id: 1,
      code: "801/A",
      product: "6A. 1 WAY SWITCH",
      white: "39.00",
      black: "43.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "802/A",
      product: "6A. 2 WAY SWITCH",
      white: "58.00",
      black: "64.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "803/A",
      product: "6A. BELL PUSH SWITCH",
      white: "54.00",
      black: "60.00",
      pkg: "20",
    },
    {
      id: 4,
      code: "804/A",
      product: "6A. BELL PUSH SWITCH WITH INDICATOR",
      white: "78.00",
      black: "86.00",
      pkg: "20",
    },
    {
      id: 5,
      code: "801",
      product: "10A.1 WAY SWITCH",
      white: "46.00",
      black: "50.00",
      pkg: "20",
    },
    {
      id: 6,
      code: "802",
      product: "10A.2 WAY SWITCH",
      white: "69.00",
      black: "79.00",
      pkg: "20",
    },
    {
      id: 7,
      code: "803",
      product: "10A.BELL PUSH SWITCH",
      white: "65.00",
      black: "75.00",
      pkg: "20",
    },
    {
      id: 8,
      code: "804",
      product: "10A.BELL PUSH SWITCH WITH INDICATOR",
      white: "90.00",
      black: "100.00",
      pkg: "20",
    },
    {
      id: 9,
      code: "805",
      product: "INDICATOR",
      white: "57.00",
      black: "64.00",
      pkg: "20",
    },
    {
      id: 10,
      code: "805/A",
      product: "NEON RING INDICATOR (NEW)",
      white: "65.00",
      black: "70.00",
      pkg: "20",
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
            <h6>NEW KICK - 6/10AMP 240V 1 MODULAR SWITCHES</h6>
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

export default Airsilvertabsec;
