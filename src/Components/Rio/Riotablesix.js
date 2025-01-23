import axios from "axios";
import React, { useEffect, useState } from "react";

function Riotablesix() {
  const tableData = [
    {
      id: 1,
      code: "ST 9021",
      product: "1 WAY SWITCH - 2M",
      white: "105.00",
      black: "118.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "ST 9022",
      product: "1 WAY SWITCH with indicator (LED) - 2M",
      white: "126.00",
      black: "141.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "ST 9023",
      product: "2 WAY SWITCH - 2M",
      white: "137.00",
      black: "153.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "ST 9024",
      product: "BELL PUSH SWITCH-2M",
      white: "116.00",
      black: "129.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "ST 9025",
      product: "BELL PUSH SWITCH with indicator(LED) - 2M",
      white: "126.00",
      black: "141.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "ST 9026",
      product: "DP SWITCH with indicator (LED)32A-2M",
      white: "231.00",
      black: "258.00",
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
              JET-10A./32A. SWITCHES 240V~2 MODULE
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

export default Riotablesix;
