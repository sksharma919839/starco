import axios from "axios";
import React, { useEffect, useState } from "react";

function Aontable() {
  const tableData = [
    {
      id: 1,
      code: "6001/A",
      product: "6A 1WAY",
      white: "42.00",
      black: "48.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "6001",
      product: "10A 1WAY SWITCH",
      white: "47.00",
      black: "54.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "6002",
      product: "10A 2 WAY SWITCH",
      white: "70.00",
      black: "80.00",
      pkg: "20",
    },
    {
      id: 4,
      code: "6003",
      product: "10A BELL SWITCH",
      white: "66.00",
      black: "76.00",
      pkg: "20",
    },
    {
      id: 5,
      code: "6004",
      product: "10A BELL SWITCH INDI",
      white: "82.00",
      black: "92.00",
      pkg: "20",
    },
    {
      id: 6,
      code: "6005",
      product: "20A 1WAY SWITCH",
      white: "75.00",
      black: "85.00",
      pkg: "20",
    },
    {
      id: 7,
      code: "6006",
      product: "20A 2WAY SWITCH",
      white: "96.00",
      black: "105.00",
      pkg: "20",
    },
    {
      id: 8,
      code: "6007",
      product: "20A SWITCH INDI",
      white: "90.00",
      black: "100.00",
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

export default Aontable;
