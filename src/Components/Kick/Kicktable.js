import axios from "axios";
import React, { useEffect, useState } from "react";

function Kicktable() {
  const tableData = [
    {
      id: 1,
      code: "KI 9601",
      product: "1 MODULAR PLATE",
      white: "68.00",
      silver: "99.00",
      black: "94.00",
      matallick: "130.00",
      cubic: "149.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "KI 9602",
      product: "2 MODULAR PLATE",
      white: "68.00",
      silver: "99.00",
      black: "94.00",
      matallick: "130.00",
      cubic: "149.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "KI 9603",
      product: "3 MODULAR PLATE",
      white: "83.00",
      silver: "119.00",
      black: "112.00",
      matallick: "142.00",
      cubic: "179.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "KI 9604",
      product: "4 MODULAR PLATE",
      white: "119.00",
      silver: "153.00",
      black: "151.00",
      matallick: "190.00",
      cubic: "240.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "KI 9606",
      product: "6/7 MODULAR PLATE",
      white: "143.00",
      silver: "188.00",
      black: "185.00",
      matallick: "235.00",
      cubic: "308.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "KI 9608",
      product: "8 MODULAR (SQR) PLATE",
      white: "177.00",
      silver: "235.00",
      black: "230.00",
      matallick: "283.00",
      cubic: "355.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "KI 9610",
      product: "8 MODULAR (HOR) PLATE",
      white: "177.00",
      silver: "235.00",
      black: "230.00",
      matallick: "283.00",
      cubic: "355.00",
      pkg: "10",
    },
    {
      id: 8,
      code: "KI 9612",
      product: "12 MODULAR PLATE",
      white: "220.00",
      silver: "283.00",
      black: "278.00",
      matallick: "330.00",
      cubic: "450.00",
      pkg: "05",
    },
    {
      id: 9,
      code: "KI 9616",
      product: "16 MODULAR PLATE",
      white: "263.00",
      silver: "308.00",
      black: "314.00",
      matallick: "377.00",
      cubic: "520.00",
      pkg: "05",
    },
    {
      id: 10,
      code: "KI 9618",
      product: "18 MODULAR PLATE",
      white: "311.00",
      silver: "347.00",
      black: "353.00",
      matallick: "448.00",
      cubic: "582.00",
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
          <table className="w-[100%]">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan={2}>MRP. ₹ PER N.</th>
              <th></th>
            </tr>
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th>Code </th>
              <th className="sm:w-[30%]">Product</th>
              <th>
                Regular <br /> White
              </th>
              <th>
                Full Silver <br /> Border
              </th>
              <th>
                MATT BLACK / <br /> GREY
              </th>
              <th>METALLIC</th>
              <th>CUBIC</th>
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
                <td>{item.silver}</td>
                <td>{item.black}</td>
                <td>{item.matallick}</td>
                <td>{item.cubic}</td>
                <td>{item.pkg}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Kicktable;
