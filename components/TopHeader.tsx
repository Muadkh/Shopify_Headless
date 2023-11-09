import React from "react";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 ">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper bg-[#1877f2] opacity-100 hover:scale-110">
              <BsFacebook   />
            </div>
            <div className="header_top__icon_wrapper bg-blue-400  hover:scale-110">
              <BsTwitter color="white"/>
            </div>
            <div className="header_top__icon_wrapper bg-[#c13584]  hover:scale-110">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper bg-[#1769ff] hover:scale-110">
              <BsLinkedin />
            </div>
          </div>

          <div className="text-gray-800 md:text-[12px] sm:text-[8px] sm:m-auto lg-m-0 ">
            <b>FREE SHIPPING   </b>THIS WEEK ORDER OVER - RS: 5000
          </div>

          <div className="flex gap-4 sm:hidden lg:block">
            <select
              className="text-gray-800 text-[12px] w-[70px] sm:"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INR">INR</option>
            </select>

            <select
              className="text-gray-800 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;