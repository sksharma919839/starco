import axios from "axios";
import React, { useEffect, useState } from "react";

function Metrotable2() {
  const tableData = [
    {
      id: 1,
      code: "1351",
      product: "1 Module Surface Plate / Silver Box",
      rate: "56.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "1352",
      product: "2 Module Surface Plate / Silver Box",
      rate: "66.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "1353",
      product: "3 Module Surface plate / Silver Box",
      rate: "77.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "1354",
      product: "4 Module Surface plate / Silver Box",
      rate: "98.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "1355",
      product: "6 Module Surface plate / Silver Box",
      rate: "126.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "1356",
      product: "8sq Module Surface plate / Silver Box",
      rate: "152.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "1357",
      product: "8hr Module Surface plate / Silver Box",
      rate: "152.00",
      pkg: "10",
    },
    {
      id: 8,
      code: "1357/A",
      product: "9 Module Surface plate / Silver Box",
      rate: "172.00",
      pkg: "10",
    },
    {
      id: 9,
      code: "1358",
      product: "12 Module Surface plate / Silver Box",
      rate: "189.00",
      pkg: "05",
    },
    {
      id: 10,
      code: "1359",
      product: "16 Module Surface plate / Silver Box",
      rate: "263.00",
      pkg: "05",
    },
    {
      id: 11,
      code: "1360",
      product: "18 Module Surface plate / Silver Box",
      rate: "273.00",
      pkg: "05",
    },
    {
      id: 12,
      code: "1361",
      product: "6 Amp 2 Pin Top",
      rate: "30.00",
      pkg: "40",
    },
    {
      id: 13,
      code: "1362",
      product: "6 Amp Male Female",
      rate: "58.00",
      pkg: "40",
    },
    {
      id: 14,
      code: "1366",
      product: "Adaptor (Heavy)",
      rate: "35.00",
      pkg: "30",
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
            <h6 className="text-center">
              Modular Surface Plate Box & <br /> Silver Border Plate Box
            </h6>
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

export default Metrotable2;
