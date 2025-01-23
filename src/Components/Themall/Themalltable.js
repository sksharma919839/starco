import axios from "axios";
import React, { useEffect, useState } from "react";

function Themalltable() {
  const tableData = [
    {
      id: 1,
      code: "1201",
      product: "1 MODULAR PLATE",
      size: "97 x 90",
      rate: "57.00",
    },
    {
      id: 2,
      code: "1202",
      product: "2 MODULAR PLATE",
      size: "107 x 90",
      rate: "57.00",
    },
    {
      id: 3,
      code: "1203",
      product: "3 MODULAR PLATE",
      size: "130 x 90",
      rate: "72.00",
    },
    {
      id: 4,
      code: "1204",
      product: "4 MODULAR PLATE",
      size: "165 x 90",
      rate: "96.00",
    },
    {
      id: 5,
      code: "1205",
      product: "6 MODULAR PLATE",
      size: "223 x 90",
      rate: "113.00",
    },
    {
      id: 6,
      code: "1206",
      product: "8 MODULAR (SQR) PLATE",
      size: "150 x 165",
      rate: "156.00",
    },
    {
      id: 7,
      code: "1207",
      product: "8 MODULAR (HOR) PLATE",
      size: "280 x 90",
      rate: "156.00",
    },
    {
      id: 8,
      code: "1208",
      product: "12 MODULAR PLATE",
      size: "223 x 152",
      rate: "182.00",
    },
    {
      id: 9,
      code: "1209",
      product: "16 MODULAR PLATE",
      size: "280 x 152",
      rate: "209.00",
    },
    {
      id: 10,
      code: "1210",
      product: "18 MODULAR PLATE",
      size: "222 x 214",
      rate: "248.00",
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
            <h6 className="text-center">THE MALL MODULAR PLATES</h6>
          </div>
          <table className="w-[100%]">
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[50%] w-[30%]">Plate</th>
              <th>Size(MM)</th>
              <th>MRP ₹ PER N.</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#c88887]"
              >
                <td>{item.code}</td>
                <td>{item.product}</td>
                <td>{item.size}</td>
                <td>{item.rate}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Themalltable;
