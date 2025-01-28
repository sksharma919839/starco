import axios from "axios";
import React, { useEffect, useState } from "react";

function Airoptabthree() {
  const tableData = [
    {
      id: 1,
      code: "1728",
      product: "Bed Switch",
      rate: "44.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "1729",
      product: "C.T. Bed Switch",
      rate: "44.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "1730",
      product: "Bed Bell Push",
      rate: "44.00",
      pkg: "20",
    },
    {
      id: 4,
      code: "1742",
      product: "Tiger Surface Step Regulator P.C",
      rate: "250.00",
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
            <h6 className="text-center">6A. BED SWITCH</h6>
          </div>
          <table className="w-[100%]">
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[60%] w-[40%]">Product</th>
              <th>MRP. PER N.</th>
              <th>PKG</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#bf8cff]"
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

export default Airoptabthree;
