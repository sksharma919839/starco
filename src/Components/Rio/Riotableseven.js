import axios from "axios";
import React, { useEffect, useState } from "react";

function Riotableseven() {
  const tableData = [
    {
      id: 1,
      code: "ST 9101",
      product: "6 AMP 2 PIN SOCKET (1M) with safety shutter",
      white: "84.00",
      black: "94.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "ST 9102/A",
      product: "6 AMP 3PIN SOCKET (2M)",
      white: "90.00",
      black: "100.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "ST 9103",
      product: "6AMP INTERNATIONAL SOCKET (2M) with safety shutter",
      white: "137.00",
      black: "150.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "ST 9104",
      product: "6/16AMP UNIVERSAL SOCKET (2M) with safety shutter",
      white: "189.00",
      black: "208.00",
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
              6AMP/16 AMP SOCKET 240V~ (1 & 2 MODULE)
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
              <th>Gray</th>
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

export default Riotableseven;
