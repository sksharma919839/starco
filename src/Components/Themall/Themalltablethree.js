import axios from "axios";
import React, { useEffect, useState } from "react";

function Themalltablethree() {
  const tableData = [
    {
      id: 1,
      code: "937",
      rate: "57.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "938",
      rate: "57.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "939",
      rate: "72.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "940",
      rate: "96.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "941",
      rate: "113.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "943",
      rate: "156.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "942",
      rate: "156.00",
      pkg: "10",
    },
    {
      id: 8,
      code: "944",
      rate: "182.00",
      pkg: "05",
    },
    {
      id: 9,
      code: "945",
      rate: "209.00",
      pkg: "05",
    },
    {
      id: 10,
      code: "946",
      rate: "248.00",
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
        <div className="md:w-[80%] w-[95%]">
          <div className="flex items-center justify-center py-[30px] text-[20px] px-[20px]">
            <h6 className="text-center">JALSA MODULAR PLATES</h6>
          </div>
          <table className="w-[100%]">
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th>MRP ₹ PER N.</th>
              <th>PKG</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#c88887]"
              >
                <td>{item.code}</td>
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

export default Themalltablethree;
