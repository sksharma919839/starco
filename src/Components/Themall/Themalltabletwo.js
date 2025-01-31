import axios from "axios";
import React, { useEffect, useState } from "react";

function Themalltabletwo() {
  const tableData = [
    {
      id: 1,
      code: "1201-G",
      rate: "57.00",
    },
    {
      id: 2,
      code: "1202-G",
      rate: "57.00",
    },
    {
      id: 3,
      code: "1203-G",
      rate: "72.00",
    },
    {
      id: 4,
      code: "1204-G",
      rate: "96.00",
    },
    {
      id: 5,
      code: "1205-G",
      rate: "113.00",
    },
    {
      id: 6,
      code: "1206-G",
      rate: "156.00",
    },
    {
      id: 7,
      code: "1207-G",
      rate: "156.00",
    },
    {
      id: 8,
      code: "1208-G",
      rate: "182.00",
    },
    {
      id: 9,
      code: "1209-G",
      rate: "209.00",
    },
    {
      id: 10,
      code: "1210-G",
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
            <h6 className="text-center">THE MALL GOLDEN FOIL MODULAR PLATES</h6>
          </div>
          <table className="w-[100%]">
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[50%] w-[30%]"></th>
              <th></th>
              <th>MRP ₹ PER N.</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#bf8cff]"
              >
                <td>{item.code}</td>
                <td></td>
                <td></td>
                <td>{item.rate}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Themalltabletwo;
