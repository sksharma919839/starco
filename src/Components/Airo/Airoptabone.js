import axios from "axios";
import React, { useEffect, useState } from "react";

function Airoptabone() {
  const tableData = [
    {
      id: 1,
      code: "1719",
      product: "16A. One Way Switch",
      rate: "88.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "1720",
      product: "16A. Two Way Switch",
      rate: "97.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "1721",
      product: "16A. Universal Socket",
      rate: "97.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "1722",
      product: "16A. U.S.S. Combined",
      rate: "185.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "1723",
      product: "16A. U.S.S. Combined With J Box",
      rate: "241.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "1723/A",
      product: "Airo Double 6/16 AMP S.S. Combined J Box (PC)",
      rate: "390.00",
      pkg: "05",
    },
    {
      id: 7,
      code: "1724",
      product: "16A. 5 In One",
      rate: "259.00",
      pkg: "05",
    },
    {
      id: 8,
      code: "1725",
      product: "16A. 5 In One With J Box",
      rate: "314.00",
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
            <h6 className="text-center">16A SWITCH/ SOCKETS</h6>
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

export default Airoptabone;
