import axios from "axios";
import React, { useEffect, useState } from "react";

function Riotableeight() {
  const tableData = [
    {
      id: 1,
      code: "ST 9151",
      product: "TV SOCKET (1M) Coaxial 40-862MHz Socket",
      white: "94.00",
      black: "103.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "ST 9152",
      product: "TELEPHONE JACK 2 LINE - 1M",
      white: "94.00",
      black: "103.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "ST 9153",
      product: "COM/MODEM JACK-1M",
      white: "126.00",
      black: "139.00",
      pkg: "20",
    },
    {
      id: 4,
      code: "ST 9154",
      product: "COM/MODEM JACK RJ-45 (CAT-5E)-1M",
      white: "315.00",
      black: "330.00",
      pkg: "20",
    },
    {
      id: 5,
      code: "ST 9155",
      product: "COM/MODEM JACK RJ-45 (CAT-6)- 1M",
      white: "420.00",
      black: "435.00",
      pkg: "20",
    },
    {
      id: 6,
      code: "ST 9156",
      product: "USB WALL CHARGER-1M",
      white: "620.00",
      black: "635.00",
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
            <h6 className="text-center">
              TV SOCKET/TELJACK/COM MODEM/USB (1 MODULE)
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

export default Riotableeight;
