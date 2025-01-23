import axios from "axios";
import React, { useEffect, useState } from "react";

function Riotableeleven() {
  const tableData = [
    {
      id: 1,
      code: "ST 9301",
      product: "3 LED NIGHT LAMP (2M)",
      white: "210.00",
      black: "235.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "ST 9302",
      product: "SP MCB-6, 10, 16, 20, 25, 32AMP (1M)",
      white: "220.00",
      black: "240.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "ST 9303",
      product: "D. P. MCB-6, 10, 16, 20, 25, 32 AMP (2M)",
      white: "410.00",
      black: "460.00",
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
              LED Night Lamp/MCB (SP-DP) (1 & 2 MODULE)
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

export default Riotableeleven;
