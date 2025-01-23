import axios from "axios";
import React, { useEffect, useState } from "react";

function Riotableten() {
  const tableData = [
    {
      id: 1,
      code: "ST 9251",
      product: "MOTOR STARER 32 (2M)",
      white: "370.00",
      black: "410.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "ST 9252",
      product: "ENERGY KEY WITH 32 AMP SWITCH (2M)",
      white: "370.00",
      black: "410.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "ST 9253",
      product: "ENERGY KEY TAG ONLY",
      white: "62.00",
      black: "72.00",
      pkg: "25",
    },
    {
      id: 4,
      code: "ST 9254",
      product: "BUZZER (2M)",
      white: "190.00",
      black: "210.00",
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
              MOTOR STARTER/ENERGY KEY/BUZZER (2 MODULE)
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

export default Riotableten;
