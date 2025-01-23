import axios from "axios";
import React, { useEffect, useState } from "react";

function Mallonetable() {
  const tableData = [
    {
      id: 1,
      code: "SM8501",
      product: "1 MODULAR PLATE",
      size: "97 x 90",
      white: "77.00",
      matt: "95.00",
      silver: "101.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "SM8502",
      product: "2 MODULAR PLATE",
      size: "107 x 90",
      white: "77.00",
      matt: "95.00",
      silver: "101.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "SM8503",
      product: "3 MODULAR PLATE",
      size: "130 x 90",
      white: "92.00",
      matt: "106.00",
      silver: "115.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "SM8504",
      product: "4 MODULAR PLATE",
      size: "165 x 90",
      white: "129.00",
      matt: "134.00",
      silver: "147.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "SM8506",
      product: "6 MODULAR PLATE",
      size: "223 x 90",
      white: "159.00",
      matt: "179.00",
      silver: "193.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "SM8508",
      product: "8 MODULAR PLATE (HQR.)",
      size: "280 x90",
      white: "204.00",
      matt: "224.00",
      silver: "241.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "SM8510",
      product: "8 MODULAR PLATE (SQR.)",
      size: "150 x 165",
      white: "204.00",
      matt: "224.00",
      silver: "241.00",
      pkg: "10",
    },
    {
      id: 8,
      code: "SM8512",
      product: "12 MODULAR PLATE",
      size: "223 x 152",
      white: "241.00",
      matt: "263.00",
      silver: "280.00",
      pkg: "05",
    },
    {
      id: 9,
      code: "SM8516",
      product: "16 MODULAR PLATE",
      size: "280 x 152",
      white: "274.00",
      matt: "302.00",
      silver: "330.00",
      pkg: "05",
    },
    {
      id: 10,
      code: "SM8518",
      product: "18 MODULAR PLATE",
      size: "222 x 214",
      white: "319.00",
      matt: "342.00",
      silver: "375.00",
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
        <div className="md:w-[80%] w-[95%] over-table">
          <table className="w-[100%] ">
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[30%] w-[30%]">Plate</th>
              <th>Size(MM)</th>
              <th>
                White Silver <br /> Border
              </th>
              <th>Matt Black</th>
              <th>
                Matt Black <br /> Silver Border
              </th>
              <th>PKG</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#c88887]"
              >
                <td>{item.code}</td>
                <td>{item.product}</td>
                <td>{item.size}</td>
                <td>{item.white}</td>
                <td>{item.matt}</td>
                <td>{item.silver}</td>
                <td>{item.pkg}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Mallonetable;
