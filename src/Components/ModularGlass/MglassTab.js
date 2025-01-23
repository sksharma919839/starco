import axios from "axios";
import React, { useEffect, useState } from "react";

function MglassTab() {
  const tableData = [
    {
      id: 1,
      code: "AO 9001",
      product: "2 MODULAR PLATE",
      rate: "400.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "AO 9002",
      product: "3 MODULAR PLATE",
      rate: "450.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "AO 9003",
      product: "4 MODULAR PLATE",
      rate: "550.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "AO 9004",
      product: "6/7 MODULAR PLATE",
      rate: "700.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "ΑΟ 9005",
      product: "8 MODULAR (SQR) PLATE",
      rate: "875.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "AO 9006",
      product: "8 MODULAR (HOR) PLATE",
      rate: "875.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "AO 9007",
      product: "12 MODULAR PLATE",
      rate: "1150.00",
      pkg: "05",
    },
    {
      id: 8,
      code: "AO 9008",
      product: "16 MODULAR PLATE",
      rate: "1250.00",
      pkg: "05",
    },
    {
      id: 9,
      code: "AO 9009",
      product: "18 MODULAR PLATE",
      rate: "1400.00",
      pkg: "05",
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
            {/* <h6 className="text-center">PLUS SWITCH</h6> */}
          </div>
          <table className="w-[100%]">
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[60%] w-[40%]">Plate</th>
              <th>MRP. PER N.</th>
              <th>PKG</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#c88887]"
              >
                <td>{item.code}</td>
                <td>{item.product}</td>
                <td>{item.rate}</td>
                <td>{item.pkg}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default MglassTab;
