import axios from "axios";
import React, { useEffect, useState } from "react";

function Mcbtable3() {
  const tableData = [
    {
      id: 1,
      rating: "6-32",
      pack: "1/6",
      rate: "395.00",
    },
    {
      id: 2,
      rating: "40",
      pack: "1/6",
      rate: "565.00",
    },
    {
      id: 3,
      rating: "63",
      pack: "1/6",
      rate: "730.00",
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
            <h6 className="text-center">DP 'C' Curve Series</h6>
          </div>
          <table className="w-[100%]">
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th>Rating(AMP) </th>
              <th>Pack</th>
              <th>MRP</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#c88887]"
              >
                <td>{item.rating}</td>
                <td>{item.pack}</td>
                <td>{item.rate}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Mcbtable3;
