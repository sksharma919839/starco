import axios from "axios";
import React, { useEffect, useState } from "react";

function Airsilvertabeleven() {
  const tableData = [
    {
      id: 1,
      code: "1155",
      product: "2M 32AMP MOTOR STARTER",
      white: "360.00",
      black: "395.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "1156",
      product: "2M ENERGY KEY TAG WITH 32A SWITCH",
      white: "350.00",
      black: "385.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "1157",
      product: "ENERGY KEY TAG ONLY",
      white: "60.00",
      black: "70.00",
      pkg: "25",
    },
    {
      id: 4,
      code: "1158",
      product: "1M SP MCB 6,10,16, 20, 25, 32 AMP",
      white: "200.00",
      black: "220.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "1159",
      product: "2M DP MCB 6,10, 16, 20, 25, 32 AMP",
      white: "380.00",
      black: "400.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "1158/A",
      product: "1M SP MCB 6, 10, 16, 20, 25, 32 AMP (Centre Knob)",
      white: "200.00",
      black: "220.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "1159/A",
      product: "2M DP MCB 6,10, 16, 20, 25, 32 AMP (Centre Knob)",
      white: "380.00",
      black: "400.00",
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
              MOTOR STARTER / ENERGY KEY TAG / SP. MCB / LED LIGHTS
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

export default Airsilvertabeleven;
