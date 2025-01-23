import axios from "axios";
import React, { useEffect, useState } from "react";

function Holdertable8() {
  const tableData = [
    {
      id: 1,
      code: "015",
      product: "TIGER CEILING ROSE 2 PLATE",
      rate: "33.00",
      pkg: "30",
    },
    {
      id: 2,
      code: "016",
      product: "TIGER CEILING ROSE 3 PLATE",
      rate: "41.00",
      pkg: "30",
    },
    {
      id: 3,
      code: "017",
      product: "HEAVY DUTY CEILING ROSE 2 PLATE",
      rate: "37.00",
      pkg: "20",
    },
    {
      id: 4,
      code: "018",
      product: "HEAVY DUTY CEILING ROSE 3 PLATE",
      rate: "43.00",
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
        <div className="md:w-[80%] w-[95%] over-table">
          <div className="flex items-center justify-center py-[30px] text-[20px] px-[20px]">
            <h6 className="text-center">TIGER/HEAVY DUTY CEILING ROSE</h6>
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

export default Holdertable8;
