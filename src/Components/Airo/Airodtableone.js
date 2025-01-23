import axios from "axios";
import React, { useEffect, useState } from "react";

function Airodtableone() {
  const tableData = [
    {
      id: 1,
      code: "1701",
      product: "Plus 6A. 1 Way Switch",
      rate: "30.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "1702",
      product: "Plus 6A. 2 Way Switch",
      rate: "41.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "1703",
      product: "Plus Bell Push Switch",
      rate: "41.00",
      pkg: "20",
    },
    {
      id: 4,
      code: "1704",
      product: "Plus 6A. Indicator",
      rate: "30.00",
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
            <h6 className="text-center">PLUS SWITCH</h6>
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

export default Airodtableone;
