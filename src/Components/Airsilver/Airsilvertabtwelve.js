import axios from "axios";
import React, { useEffect, useState } from "react";

function Airsilvertabtwelve() {
  const tableData = [
    {
      id: 1,
      code: "1166",
      product: "2M 3 LED FOOT LIGHT",
      white: "150.00",
      black: "165.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "1167",
      product: "2M 6 LED FOOT LIGHT",
      white: "195.00",
      black: "210.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "1170",
      product: "3M 3 LED FOOT LIGHT",
      white: "210.00",
      black: "225.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "1171",
      product: "2M NIGHT LAMP (ROUND)",
      white: "200.00",
      black: "215.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "1172",
      product: "2M 6 LED NIGHT LAMP (SQUARE)",
      white: "195.00",
      black: "210.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "1173",
      product: "3M FOOT LIGHT",
      white: "225.00",
      black: "240.00",
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
            <h6 className="text-center">3 & 4 MODULAR LED PREMIUM FOOTLIGHT</h6>
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

export default Airsilvertabtwelve;
