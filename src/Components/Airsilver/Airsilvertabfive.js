import axios from "axios";
import React, { useEffect, useState } from "react";

function Airsilvertabfive() {
  const tableData = [
    {
      id: 1,
      code: "907",
      product: "20A. 1 WAY SWITCH",
      white: "75.00",
      black: "84.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "908",
      product: "20A. 2 WAY SWITCH",
      white: "95.00",
      black: "109.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "909",
      product: "20A. SWITCH WITH INDICATOR",
      white: "88.00",
      black: "101.00",
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
            <h6>JALSA BIG KNOB-20AMP 240V 1 MODULAR SWITCHES</h6>
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

export default Airsilvertabfive;
