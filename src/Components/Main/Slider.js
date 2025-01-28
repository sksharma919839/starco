import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import aon from "../../Media/Image/AON.png";
import { Link } from "react-router-dom";
import axios from "axios";
import s1 from "../../Media/Image/s1.png";
import s2 from "../../Media/Image/s2.png";
import s3 from "../../Media/Image/s3.png";
import s4 from "../../Media/Image/s4.png";
import s5 from "../../Media/Image/s5.png";
import s6 from "../../Media/Image/s6.png";
import s7 from "../../Media/Image/s7.png";
import s8 from "../../Media/Image/s8.png";
import s9 from "../../Media/Image/s9.png";
import s10 from "../../Media/Image/s10.png";
import s11 from "../../Media/Image/s11.png";
import s12 from "../../Media/Image/s12.png";
import s13 from "../../Media/Image/s13.png";
import s14 from "../../Media/Image/s14.png";
import s15 from "../../Media/Image/s15.png";

function Sliderr() {
  const slider = [
    {
      id: 1,
      h5: "Aon Switches",
      img: s1,
      upload_to: "2024-10-14T08:09:29.554862Z",
      link: "/aon",
    },
    {
      id: 2,
      h5: "Air Silver",
      img: s2,
      upload_to: "2024-10-14T08:10:59.731271Z",
      link: "/airsilver",
    },
    {
      id: 3,
      h5: "Airon",
      img: s3,
      upload_to: "2024-10-14T08:11:54.401536Z",
      link: "/airon",
    },
    {
      id: 4,
      h5: "Rio Switches",
      img: s4,
      link: "/rio",
    },
    {
      id: 5,
      h5: "Airo Switches",
      img: s5,
      upload_to: "2024-10-14T08:13:24.688736Z",
      link: "/airo",
    },
    {
      id: 6,
      h5: "Modular Glass Plates",
      img: s6,
      upload_to: "2024-10-14T08:14:11.295417Z",
      link: "modularglass",
    },
    {
      id: 7,
      h5: "Kick Plates",
      img: s7,
      upload_to: "2024-10-14T08:14:48.253449Z",
      link: "/kick",
    },
    {
      id: 8,
      h5: "The Mall",
      img: s8,
      upload_to: "2024-10-14T08:15:57.829862Z",
      link: "/themall",
    },
    {
      id: 9,
      h5: "Mall One",
      img: s9,
      upload_to: "2024-10-14T08:16:29.094431Z",
      link: "/mallone",
    },
    {
      id: 10,
      h5: "Air  Wood",
      img: s10,
      upload_to: "2024-10-14T08:17:45.440103Z",
      link: "/airwood",
    },
    {
      id: 11,
      h5: "Rio Plates",
      img: s11,
      upload_to: "2024-10-14T08:18:07.249359Z",
      link: "/rioplate",
    },
    {
      id: 12,
      h5: "MCB",
      img: s12,
      upload_to: "2024-10-14T08:18:27.177854Z",
      link: "/mcb",
    },
    {
      id: 13,
      h5: "Flex Box",
      img: s13,
      upload_to: "2024-10-14T08:18:52.709849Z",
      link: "/flexbox",
    },
    {
      id: 14,
      h5: "Metro",
      img: s14,
      upload_to: "2024-10-14T08:19:27.699956Z",
      link: "/metro",
    },
    {
      id: 15,
      h5: "Holder",
      img: s15,
      upload_to: "2024-10-14T08:19:48.073621Z",
      link: "/holder",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 881,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 595,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
      className="slider-container overflow-hidden mx-[10px] py-[30px]"
    >
      <Slider {...settings}>
        {slider.map((item) => (
          <div className="sm:mx-0 mx-[30px]" key={item.id}>
            <Link to={item.link}>
              <div className="lg:h-[400px] h-[280px] lg:w-[400px] w-[280px] overflow-hidden transition-all product-img duration-500 bg-[#272727] rounded-2xl">
                <img
                  src={item.img}
                  className="lg:h-[348px] h-[228px] transition-all duration-1000 hover:rotate-[360deg] px-[30px]"
                  alt=""
                />
                <h5 className="text-center text-[24px] transition-all duration-500  hover:text-[#bf8cff]">
                  {item.h5}
                </h5>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliderr;
