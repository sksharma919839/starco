import axios from "axios";
import React, { useEffect, useState } from "react";

function Riotablenine() {
  const tableData = [
    {
      id: 1,
      code: "ST 9201",
      product: "DIMMER (1M)-240V 50-60Hz 300-450w",
      white: "200.00",
      black: "220.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "ST 9202",
      product: "STEP REGULATOR (1M)-240V 50-60Hz",
      white: "290.00",
      black: "320.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "ST 9202/A",
      product: "STEP REGULATOR (1M)-240V 50-60Hz (FR) (NEW)",
      white: "290.00",
      black: "320.00",
      pkg: "20",
    },
    {
      id: 4,
      code: "ST 9203",
      product: "DIMMER (2M)-240V 50-60Hz 300-450W",
      white: "220.00",
      black: "240.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "ST 9204",
      product: "STEP REGULATOR (2M)-5 step 240V 50-60Hz-(FR)",
      white: "320.00",
      black: "350.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "ST 9204/A",
      product: "STEP REGULATOR (2M)-5 step 240V 50-60Hz (FR) (NEW)",
      white: "320.00",
      black: "350.00",
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
              DIMMER & STEP REGULATOR 240V-(1 & 2 MODULE)
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

export default Riotablenine;
