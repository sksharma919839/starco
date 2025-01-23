import axios from "axios";
import React, { useEffect, useState } from "react";

function Metrotable3() {
  const tableData = [
    {
      id: 1,
      code: "4001",
      product: '"6.5" x 6.5"',
      rate: "77.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "4002",
      product: '"5" x 5"',
      rate: "62.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "4003",
      product: '"5" x 7"',
      rate: "87.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "4004",
      product: '"5" x 8"',
      rate: "91.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "4005",
      product: '"5" x 9"',
      rate: "105.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "4006",
      product: '"5" x 11"',
      rate: "129.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "4007",
      product: '"5" x 13"',
      rate: "157.00",
      pkg: "10",
    },
    {
      id: 8,
      code: "4008",
      product: '"5" x 16"',
      rate: "178.00",
      pkg: "10",
    },
    {
      id: 9,
      code: "4009",
      product: '"7" x 7"',
      rate: "129.00",
      pkg: "10",
    },
    {
      id: 10,
      code: "4010",
      product: '"7" x "9"',
      rate: "147.00",
      pkg: "10",
    },
    {
      id: 11,
      code: "4011",
      product: '"7" x 11"',
      rate: "187.00",
      pkg: "10",
    },
    {
      id: 12,
      code: "4012",
      product: '"11" x "9"',
      rate: "209.00",
      pkg: "05",
    },
    {
      id: 13,
      code: "4013",
      product: '"13" x "11"',
      rate: "343.00",
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
          <div className="flex items-center justify-center py-[30px] text-[20px] px-[20px]">
            <h6 className="text-center">Metro Plate</h6>
          </div>
          <table className="w-[100%] ">
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[30%] w-[30%]">Product</th>
              <th>MRP ₹ PER N.</th>
              <th>PKG</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#c88887]"
              >
                <td>{item.code}</td>
                <td>{item.product}</td>
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

export default Metrotable3;
