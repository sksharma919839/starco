import axios from "axios";
import React, { useEffect, useState } from "react";

function Flextable1() {
  const tableData = [
    {
      id: 1,
      code: "501",
      product: "2 PIN 4 MTR",
      rate: "550.00",
      pkg: "05",
    },
    {
      id: 2,
      code: "501/A",
      product: "3 PIN 4 MTR",
      rate: "660.00",
      pkg: "05",
    },
    {
      id: 3,
      code: "506",
      product: "2 PIN 8 MTR",
      rate: "680.00",
      pkg: "05",
    },
    {
      id: 4,
      code: "506/A",
      product: "3 PIN 8 MTR",
      rate: "720.00",
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
            <h6 className="text-center">Flex Box</h6>
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

export default Flextable1;
