import axios from "axios";
import React, { useEffect, useState } from "react";

function Airwoodtable() {
  const tableData = [
    {
      id: 1,
      code: "951",
      product: "1 MODULAR PLATE",
      size: '4.5" x 4.5"',
      rate: "98.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "952",
      product: "2 MODULAR PLATE",
      size: '4.5" x 4.5"',
      rate: "98.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "953",
      product: "3 MODULAR PLATE",
      size: '4.5" x 5"',
      rate: "116.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "954",
      product: "4 MODULAR PLATE",
      size: '4.5" x 6.5"',
      rate: "150.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "955",
      product: "6 MODULAR PLATE",
      size: '4.5" x 8.5"',
      rate: "173.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "956",
      product: "8 MODULAR PLATE - (HOR)",
      size: '4.5" x 10.5"',
      rate: "208.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "957",
      product: "10 MODULAR PLATE",
      size: '4.5" x 12.5"',
      rate: "220.00",
      pkg: "10",
    },
    {
      id: 8,
      code: "958",
      product: "12 MODULAR PLATE - (HOR)",
      size: '4.5" x 15.5"',
      rate: "275.00",
      pkg: "10",
    },
    {
      id: 9,
      code: "959",
      product: "12 MODULAR PLATE - (SQR)",
      size: '4.5" x 8.5"',
      rate: "275.00",
      pkg: "10",
    },
    {
      id: 10,
      code: "960",
      product: "12 MODULAR PLATE - (V)",
      size: '8.5" x 6.5"',
      rate: "275.00",
      pkg: "10",
    },
    {
      id: 11,
      code: "961",
      product: "16 MODULAR PLATE",
      size: '6.5" x 10.5"',
      rate: "297.00",
      pkg: "10",
    },
    {
      id: 12,
      code: "962",
      product: "18 MODULAR PLATE - (HOR)",
      size: '9.5" x 11.5"',
      rate: "325.00",
      pkg: "10",
    },
    {
      id: 13,
      code: "963",
      product: "18 MODULAR PLATE - (SQR) (V)",
      size: '11.5" x 9.5"',
      rate: "325.00",
      pkg: "10",
    },
    {
      id: 14,
      code: "964",
      product: "20 MODULAR PLATE",
      size: '6.5" x 12.5"',
      rate: "336.00",
      pkg: "10",
    },
    {
      id: 15,
      code: "965",
      product: "24 MODULAR PLATE",
      size: '9.5" x 12.5',
      rate: "369.00",
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
        <div className="md:w-[80%] w-[95%] over-table">
          <table className="w-[100%] ">
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[30%] w-[30%]">Plate</th>
              <th>Size</th>
              <th>
                MRP ₹ <br /> PER N.
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
                <td>{item.rate}</td>
                <td>{item.pkg}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Airwoodtable;
