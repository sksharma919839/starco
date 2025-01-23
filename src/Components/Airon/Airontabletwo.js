import axios from "axios";
import React, { useEffect, useState } from "react";

function Airontabletwo() {
  const tableData = [
    {
      id: 1,
      code: "A107",
      product: "10A 1 WAY SWITCH 1+1",
      white: "104.00",
      black: "113.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "A108",
      product: "10A 2 WAY SWITCH 1+1",
      white: "109.00",
      black: "120.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "A109",
      product: "20A 1 WAY SWITCH 1+1",
      white: "113.00",
      black: "124.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "A110",
      product: "10+20A 1 WAY SWITCH 1+1",
      white: "109.00",
      black: "120.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "A111",
      product: "10 A 1+2 WAY SWITCH 1+1",
      white: "106.00",
      black: "117.00",
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
              AIRON-10/20 AMP 240V 2 MODULAR 1+1 ROUND SWITCHES
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

export default Airontabletwo;
