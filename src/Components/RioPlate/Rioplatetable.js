import axios from "axios";
import React, { useEffect, useState } from "react";

function Rioplatetable() {
  const tableData = [
    {
      id: 1,
      code: "ST-9501",
      product: "1 MODULAR PLATE",
      size: "97 x 90",
      silver: "90.00",
      metalic: "109.00",
      wood: "130.00",
      pkg: "10",
    },
    {
      id: 2,
      code: "ST-9502",
      product: "2 MODULAR PLATE",
      size: "107 x 90",
      silver: "90.00",
      metalic: "109.00",
      wood: "130.00",
      pkg: "10",
    },
    {
      id: 3,
      code: "ST-9503",
      product: "3 MODULAR PLATE",
      size: "130 x 90",
      silver: "110.00",
      metalic: "140.00",
      wood: "175.00",
      pkg: "10",
    },
    {
      id: 4,
      code: "ST-9504",
      product: "4 MODULAR PLATE (H & V)",
      size: "165 x 90",
      silver: "135.00",
      metalic: "180.00",
      wood: "235.00",
      pkg: "10",
    },
    {
      id: 5,
      code: "ST-9506",
      product: "6 MODULAR PLATE (H & V)",
      size: "223 x 90",
      silver: "175.00",
      metalic: "237.00",
      wood: "330.00",
      pkg: "10",
    },
    {
      id: 6,
      code: "ST-9508",
      product: "8 MODULAR PLATE (SQ)",
      size: "150 x 165",
      silver: "225.00",
      metalic: "295.00",
      wood: "375.00",
      pkg: "10",
    },
    {
      id: 7,
      code: "ST-9510",
      product: "8 MODULAR PLATE (H & V)",
      size: "280 x 90",
      silver: "225.00",
      metalic: "295.00",
      wood: "375.00",
      pkg: "10",
    },
    {
      id: 8,
      code: "ST-9512",
      product: "12 MODULAR PLATE (H & V)",
      size: "223 x 152",
      silver: "275.00",
      metalic: "325.00",
      wood: "440.00",
      pkg: "05",
    },
    {
      id: 9,
      code: "ST-9516",
      product: "16 MODULAR PLATE (H & V)",
      size: "280 x 152",
      silver: "305.00",
      metalic: "375.00",
      wood: "460.00",
      pkg: "05",
    },
    {
      id: 10,
      code: "ST-9518",
      product: "18 MODULAR PLATE",
      size: "222 x 214",
      silver: "340.00",
      metalic: "430.00",
      wood: "500.00",
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
          <table className="w-[100%] ">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan={3}>MRP ₹ PER N.</th>
              <th></th>
            </tr>
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[30%] w-[30%]">Product</th>
              <th>Size(MM)</th>
              <th>Regular or Silver Border</th>
              <th>Metallic</th>
              <th>Wood</th>
              <th>PKG</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#c88887]"
              >
                <td>{item.code}</td>
                <td>{item.product}</td>
                <td>{item.size}</td>
                <td>{item.silver}</td>
                <td>{item.metalic}</td>
                <td>{item.wood}</td>
                <td>{item.pkg}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Rioplatetable;
