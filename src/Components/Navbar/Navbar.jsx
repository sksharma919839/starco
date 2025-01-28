import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Media/Image/logo.png";
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// import fan from "../../Media/Image/fan.png";
import switchs from "../../Media/Image/switches.png";
// import light from "../../Media/Image/light.png";
// import wire from "../../Media/Image/wire.png";
import switchchenger from "../../Media/Image/switchchenger.png";
import plates from "../../Media/Image/plates.png";

function Navbar() {
  const navbarItem = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Products",
      link: "/product",
    },
    {
      id: 3,
      name: "About Us",
      link: "/about",
    },
    // {
    //   id: 4,
    //   name: "Media",
    //   link: "/media",
    // },
    // {
    //   id: 5,
    //   name: "Career",
    //   link: "/career",
    // },
    {
      id: 6,
      name: "Contact Us",
      link: "/contact",
    },
  ];
  const [isClick, setIsClick] = useState(false);

  const menuClick = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <div className="h-[94px] bg-[#000000] z-[11] w-full fixed">
        <div className="flex items-center lg:justify-evenly justify-between lg:px-0 sm:px-[40px] px-[15px] sm:py-0 py-[20px]">
          <div>
            <Link to="/">
              <img src={logo} className="sm:h-[92px] px-[10px]" alt="" />
            </Link>
          </div>
          <ul className="lg:flex hidden items-center justify-evenly">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#bf8cff] text-[16px] group py-[8px] px-[20px]"
                    : "text-[#ffffff] text-[16px] group py-[8px] px-[20px] transition-all duration-500 hover:text-[#bf8cff]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="droup-li">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#bf8cff] text-[16px] rounded-lg py-[12px] px-[20px] relative"
                    : "text-[#ffffff] text-[16px] rounded-lg py-[12px] px-[20px] relative transition-all  product-box "
                }
              >
                Products
              </NavLink>
              <div className="absolute hidden droup-ul pt-[6.5px] pl-[-1.5px]">
                <ul className="flex">
                  <li className="bg-[#272727] fan-li hover:bg-[#000000] transition-all duration-300 w-[150px] h-[150px] drop-li relative group">
                    <Link to="/switch">
                      <div className="flex items-center justify-center pt-[35px]">
                        <img
                          src={switchs}
                          className="h-[40px] w-[40px]"
                          alt=""
                        />
                      </div>
                      <h3 className="text-center pt-[15px] pb-[15px] text-[16px] text-[#858585]">
                        Switches
                      </h3>
                    </Link>
                    <ul className="absolute hidden fan-ul w-[150px] drop-li mt-[26.5px] cursor-pointer">
                      <li>
                        <Link
                          to="/aon"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[28.2px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          AON Switch
                        </Link>
                      </li>
                      <li className="mt-[13px]">
                        <Link
                          to="/airsilver"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[40.2px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          Air Silver
                        </Link>
                      </li>
                      <li className="mt-[13.5px]">
                        <Link
                          to="/airon"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[54.3px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          Airon
                        </Link>
                      </li>
                      <li className="mt-[13px]">
                        <Link
                          to="/rio"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[34px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          Rio Switch
                        </Link>
                      </li>
                      <li className="mt-[13.4px]">
                        <Link
                          to="/airo"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[31.3px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          Airo Switch
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="bg-[#272727] fan-li hover:bg-[#000000] transition-all duration-300 w-[150px] relative group h-[150px] drop-li">
                    <Link to="/plate">
                      <div className="flex items-center justify-center pt-[35px]">
                        <img
                          src={plates}
                          className="h-[40px] ws-[40px]"
                          alt=""
                        />
                      </div>
                      <h3 className="text-center pt-[15px] pb-[35px] text-[16px] text-[#858585]">
                        Plates
                      </h3>
                    </Link>
                    <ul className="absolute hidden fan-ul w-[150px] drop-li cursor-pointer">
                      <li className="mt-[8px]">
                        <Link
                          to="/modularglass"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[19.5px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff] text-center"
                        >
                          Modular Glass{" "}
                        </Link>
                      </li>
                      <li className="mt-[13px]">
                        <Link
                          to="/kick"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[25.2px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          Kick Modular
                        </Link>
                      </li>
                      <li className="mt-[12.2px]">
                        <Link
                          to="/themall"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[41.7px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          The Mall
                        </Link>
                      </li>
                      <li className="mt-[12.6px]">
                        <Link
                          to="/mallone"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[40.3px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          Mall One
                        </Link>
                      </li>
                      <li className="mt-[12.2px]">
                        <Link
                          to="/airwood"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[30.4px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          AIR WOOD
                        </Link>
                      </li>
                      <li className="mt-[12.6px]">
                        <Link
                          to="/rioplate"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[59.3px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          RIO
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="bg-[#272727] fan-li hover:bg-[#000000] transition-all duration-300 w-[150px] h-[150px] drop-li relative group">
                    <Link to="/switchgear">
                      <div className="flex items-center justify-center pt-[35px]">
                        <img
                          src={switchchenger}
                          className="h-[40px] w-[40px]"
                          alt=""
                        />
                      </div>
                      <h3 className="text-center pt-[15px] pb-[35px] text-[16px] text-[#858585]">
                        Switchgear & Accessories
                      </h3>
                    </Link>
                    <ul className="absolute hidden fan-ul w-[150px] drop-li mt-[-25.5px] cursor-pointer">
                      <li className="mt-[8px]">
                        <Link
                          to="/mcb"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[55.5px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          MCB
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          to="/flexbox"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[41.2px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          Flex Box
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          to="/metro"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[52.3px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          Metro
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          to="/holder"
                          className="bg-[#000000] text-[#858585] py-[10px] text-[17px] px-[28.5px] transition-all duration-300 hover:bg-[#272727] hover:text-[#ffffff]"
                        >
                          Accessories
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#bf8cff] text-[16px] py-[8px] px-[20px]"
                    : "text-[#ffffff] text-[16px] py-[8px] px-[20px] transition-all duration-500 hover:text-[#bf8cff]"
                }
              >
                About Us
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/media"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#bf8cff] text-[16px] py-[8px] px-[20px]"
                    : "text-[#ffffff] text-[16px] py-[8px] px-[20px] transition-all duration-500 hover:text-[#bf8cff]"
                }
              >
                Media
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#bf8cff] text-[16px] py-[8px] px-[20px]"
                    : "text-[#ffffff] text-[16px] py-[8px] px-[20px] transition-all duration-500 hover:text-[#bf8cff]"
                }
              >
                Career
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#bf8cff] text-[16px] py-[8px] px-[20px]"
                    : "text-[#ffffff] text-[16px] py-[8px] px-[20px] transition-all duration-500 hover:text-[#bf8cff]"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center">
            <div className="sm:w-[285px] w-[180px] flex items-center border border-[#ffffff] rounded-3xl overflow-hidden">
              <input
                type="search"
                name="search"
                id=""
                className="w-[100%] border-none bg-[#000000] py-[5px] px-[20px] text-[#ffffff] "
                placeholder="Search"
              />
              <button>
                <IoSearch size={25} className="mr-[9px]" />
              </button>
            </div>
            <div
              onClick={menuClick}
              className="sm:mx-[20px] mx-[5px] text-[#f5f5f5] lg:hidden z-[99]"
            >
              {isClick ? <IoClose size={30} /> : <HiMenuAlt3 size={30} />}
            </div>
          </div>
        </div>
        {/* Responsive Design */}
        <ul
          className={
            isClick
              ? "fixed lg:hidden left-0 top-0 sm:w-[40%] w-full h-full  bg-[#000000] ease-in-out duration-500 navbar-box"
              : "ease-in-out sm:w-[40%] w-full duration-500 fixed top-0 bottom-0 left-[-105%] navbar-box"
          }
        >
          <div className="py-[20px] px-[50px] flex items-center ">
            <Link to="/trade">
              <img src={logo} className="w-[100px]" alt="" />
            </Link>
          </div>
          <div className="flex items-center ">
            <div>
              {navbarItem.map((items) => (
                <li
                  key={items.id}
                  className="mx-[50px] pl-[20px] sm:pr-[70px] pr-[120px] pb-[10px] my-[15px] border-b"
                >
                  <NavLink
                    to={items.link}
                    className={({ isActive }) =>
                      `${isActive ? "text-[#bf8cff] " : "text-[#ffffff]"
                      } py-[7px] text-[20px] hover:text-[#bf8cff] transition-all duration-500 `
                    }
                  >
                    {items.name}
                  </NavLink>
                </li>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
