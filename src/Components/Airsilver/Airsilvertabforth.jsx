import axios from "axios";
import React, { useEffect, useState } from "react";

function Airsilvertabforth() {
  const tableData = [
    {
      "id": 1,
      "code": "901",
      "product": "10A. 1 WAY SWITCH",
      "white": "46.00",
      "black": "50.00",
      "pkg": "20"
    },
    {
      "id": 2,
      "code": "902",
      "product": "10A. 2 WAY SWITCH",
      "white": "69.00",
      "black": "79.00",
      "pkg": "20"
    },
    {
      "id": 3,
      "code": "903",
      "product": "10A. BELL PUSH SWITCH",
      "white": "65.00",
      "black": "75.00",
      "pkg": "20"
    },
    {
      "id": 4,
      "code": "905",
      "product": "10A. BELL PUSH SWITCH WITH INDICATOR",
      "white": "90.00",
      "black": "103.00",
      "pkg": "20"
    }
  ]

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
            <h6>JALSA BIG KNOB 10AMP 240V 1 MODULAR SWITCHES</h6>
          </div>
          <table className="w-[100%]">
            <tr>
              <th></th>
              <th></th>
              <th colSpan={2}>MRP. PER N.</th>
              <th></th>
            </tr>
            <tr className="sm:text-[18px] text-[15px] pb-[10px] h-[60px]">
              <th className="w-[10%]">Code </th>
              <th className="md:w-[50%] w-[30%]">Product</th>
              <th>White</th>
              <th>Matt Black/Gray</th>
              <th>PKG</th>
            </tr>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className="text-center bg-[#494949] sm:text-[16px] text-[14px] w-[100%]  cursor-pointer h-[40px] border-y transition-all duration-500 hover:bg-[#c88887]"
              >
                <td>{item.code}</td>
                <td>{item.product}</td>
                <td>{item.white}</td>
                <td>{item.black}</td>
                <td>{item.pkg}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Airsilvertabforth;
