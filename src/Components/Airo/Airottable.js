import axios from "axios";
import React, { useEffect, useState } from "react";

function Airottable() {
  const tableData = [
    {
      id: 1,
      code: "1501",
      product: "6A. 1 Way 240V. 1 Way Switch",
      rate: "30.00",
      pkg: "20",
    },
    {
      id: 2,
      code: "1502",
      product: "6A. 240V. 2 Way Switch",
      rate: "37.00",
      pkg: "20",
    },
    {
      id: 3,
      code: "1503",
      product: "Bell Push Switch",
      rate: "36.00",
      pkg: "20",
    },
    {
      id: 4,
      code: "1504",
      product: "Indicator",
      rate: "30.00",
      pkg: "20",
    },
    {
      id: 5,
      code: "1505",
      product: "6A. 2 Pin Socket",
      rate: "30.00",
      pkg: "20",
    },
    {
      id: 6,
      code: "1506",
      product: "6A. 2 in One Socket",
      rate: "47.00",
      pkg: "20",
    },
    {
      id: 7,
      code: "1507",
      product: "T.V. Antina Switch Size",
      rate: "39.00",
      pkg: "20",
    },
    {
      id: 8,
      code: "1508",
      product: "T.V. Antina Socket Size",
      rate: "44.00",
      pkg: "10",
    },
    {
      id: 9,
      code: "1509",
      product: "2 Line Tel-Jack Switch Size",
      rate: "56.00",
      pkg: "20",
    },
    {
      id: 10,
      code: "1510",
      product: "2 Line Tel-Jack Socket Size",
      rate: "61.00",
      pkg: "10",
    },
    {
      id: 11,
      code: "1511",
      product: "Tel. Socket Top Switch Size",
      rate: "47.00",
      pkg: "10",
    },
    {
      id: 12,
      code: "1513",
      product: "10 AMP Kitkat Fuse",
      rate: "47.00",
      pkg: "20",
    },
    {
      id: 13,
      code: "1514",
      product: "16 AMP Kitkat Fuse",
      rate: "55.00",
      pkg: "10",
    },
    {
      id: 14,
      code: "1515",
      product: "Regulator Switch Size",
      rate: "171.00",
      pkg: "10",
    },
    {
      id: 15,
      code: "1515-A",
      product: "Step Regulator Switch Size",
      rate: "291.00",
      pkg: "10",
    },
    {
      id: 16,
      code: "1516",
      product: "Regulator Socket Size",
      rate: "185.00",
      pkg: "10",
    },
    {
      id: 17,
      code: "1517",
      product: "EME Fan Step Regulator",
      rate: "317.00",
      pkg: "10",
    },
    {
      id: 18,
      code: "1518",
      product: "16A. 1 Way Switch",
      rate: "99.00",
      pkg: "10",
    },
    {
      id: 19,
      code: "1519",
      product: "16A. 2 Way Switch",
      rate: "106.00",
      pkg: "10",
    },
    {
      id: 20,
      code: "1520",
      product: "6A./16A. Universal Socket",
      rate: "99.00",
      pkg: "10",
    },
    {
      id: 21,
      code: "1521",
      product: "6A./16A. U.S.S. Combined",
      rate: "198.00",
      pkg: "10",
    },
    {
      id: 22,
      code: "1522",
      product: "6A./16A. 5 in One",
      rate: "251.00",
      pkg: "05",
    },
    {
      id: 23,
      code: "1523",
      product: "32a. D.P. Switch With Indicator",
      rate: "190.00",
      pkg: "10",
    },
    {
      id: 24,
      code: "1524",
      product: "Bell Push (Indicator Big Size)",
      rate: "100.00",
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

export default Airottable;
