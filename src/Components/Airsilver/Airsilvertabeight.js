import axios from "axios";
import React, { useEffect, useState } from "react";

function Airsilvertabeight() {
  const tableData = [
    {
      id: 1,
      code: "1113",
      product: "1 WAY SWITCH",
      white: "80.00",
      black: "90.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "1114",
      product: "2 WAY SWITCH",
      white: "95.00",
      black: "105.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "1115",
      product: "BELL PUSH SWITCH",
      white: "95.00",
      black: "105.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "1116",
      product: "BELL PUSH SWITCH WITH INDICATOR",
      white: "105.00",
      black: "115.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "1117",
      product: "SWITCH WITH INDICATOR",
      white: "105.00",
      black: "115.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "1118",
      product: "32 AMP.. D.P. SWITCH WITH INDICATOR",
      white: "195.00",
      black: "210.00",
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
            <h6>NEW IDEA - 10/20AMP 240V 2 MODULAR SWITCHES/32AMP DP SWITCH</h6>
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

export default Airsilvertabeight;
