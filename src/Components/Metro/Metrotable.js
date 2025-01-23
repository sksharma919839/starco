import axios from "axios";
import React, { useEffect, useState } from "react";

function Metrotable() {
  const tableData = [
    {
      id: 1,
      code: "SB1",
      product: "1/2 Module Surface Box",
      rate: "51.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "SB2",
      product: "3 Module Surface Box",
      rate: "68.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "SB3",
      product: "4 Module Surface Box",
      rate: "76.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "SB4",
      product: "6 Module Surface Box",
      rate: "119.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "SB5",
      product: "8sq Module Surface Box",
      rate: "144.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "SB6",
      product: "8hr Module Surface Box",
      rate: "154.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "SB7",
      product: "12 Module Surface Box",
      rate: "170.00",
      pkg: "05",
    },
    {
      id: 8,
      code: "SB8",
      product: "16 Module Surface Box",
      rate: "210.00",
      pkg: "05",
    },
    {
      id: 9,
      code: "SB9",
      product: "18 Module Surface Box",
      rate: "228.00",
      pkg: "05",
    },
    {
      id: 10,
      code: "SB10",
      product: "16A U.S.S Junction Box",
      rate: "48.00",
      pkg: "20",
    },
    {
      id: 11,
      code: "SB11",
      product: "16A 5x1 Junction Box",
      rate: "64.00",
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
          <div className="flex items-center justify-center py-[30px] text-[20px] px-[20px]">
            <h6 className="text-center">Heavy Duty Unbrekabe Surface Box</h6>
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

export default Metrotable;
