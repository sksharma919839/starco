import axios from "axios";
import React, { useEffect, useState } from "react";

function Airsilvertabseven() {
  const tableData = [
    {
      id: 1,
      code: "1107",
      product: "20A. 1 WAY SWITCH",
      white: "67.00",
      black: "77.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "1107/A",
      product: "20A. 1 WAY SWITCH WITH PORCELAIN",
      white: "92.00",
      black: "104.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "1108",
      product: "20A. 2 WAY SWITCH",
      white: "75.00",
      black: "86.00",
      pkg: "20",
    },
    {
      id: 4,
      code: "1109",
      product: "20A. SWITCH WITH INDICATOR",
      white: "80.00",
      black: "92.00",
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
            <h6>NEW IDEA-20AMP 240V 1 MODULAR SWITCHES</h6>
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

export default Airsilvertabseven;
