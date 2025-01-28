import axios from "axios";
import React, { useEffect, useState } from "react";

function Airsilvertabnin() {
  const tableData = [
    {
      id: 1,
      code: "1121",
      product: "1M 6AMP 2PIN SOCKET",
      white: "59.00",
      black: "66.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "1122",
      product: "2M 6AMP 3PIN SOCKET",
      white: "60.00",
      black: "67.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "1124",
      product: "2M 6AMP 2 IN 1 MULTI SOCKET WITH SHUTTER",
      white: "84.00",
      black: "94.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "1125",
      product: "2M 6/16AMP UNI. SOCKET WITH SAFETY SHUTTER",
      white: "137.00",
      black: "153.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "1125/A",
      product: "2M 6/16AMP SOCKET WITH PORCELAIN",
      white: "137.00",
      black: "153.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "1127",
      product: "2M 10 AMP INTERNATIONAL SOCKET",
      white: "86.00",
      black: "96.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "1132",
      product: "1M USB",
      white: "520.00",
      black: "530.00",
      pkg: "10",
    },
    {
      id: 8,
      code: "1132/A",
      product: "1M 2.1Amp/12Volt C-TYPE CHARGER (NEW)",
      white: "560.00",
      black: "580.00",
      pkg: "10",
    },
    {
      id: 9,
      code: "1133",
      product: "1M 10/20AMP KITKAT FUSE",
      white: "86.00",
      black: "96.00",
      pkg: "20",
    },
    {
      id: 10,
      code: "1134",
      product: "1M TV ANTIΝΑ",
      white: "78.00",
      black: "87.00",
      pkg: "20",
    },
    {
      id: 11,
      code: "1135",
      product: "1M TEL JACK 2 LINE",
      white: "78.00",
      black: "87.00",
      pkg: "20",
    },
    {
      id: 12,
      code: "1136",
      product: "1M TEL JACK 4 LINE",
      white: "109.00",
      black: "122.00",
      pkg: "20",
    },
    {
      id: 13,
      code: "1137",
      product: "2M COM. JACK",
      white: "109.00",
      black: "122.00",
      pkg: "10",
    },
    {
      id: 14,
      code: "1137/A",
      product: "1M COM. JACK CAT 6",
      white: "410.00",
      black: "430.00",
      pkg: "20",
    },
    {
      id: 15,
      code: "1138",
      product: "1M BLANK PLATE",
      white: "13.00",
      black: "15.00",
      pkg: "100",
    },
    {
      id: 16,
      code: "1139",
      product: "2M BLANK PLATE",
      white: "22.00",
      black: "25.00",
      pkg: "100",
    },
    {
      id: 17,
      code: "1140",
      product: "2M BUZZER",
      white: "185.00",
      black: "205.00",
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
              1M/2M SOCKET / TV ANTENA / TEL JACK/COM. MODEM JACK / <br />{" "}
              KITKAT FUSE/USB/1 & 2M BLANK PLATE BUZZER
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

export default Airsilvertabnin;
