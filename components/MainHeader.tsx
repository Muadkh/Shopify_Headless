

import React, { Suspense } from "react";

import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import Cart from "@/app/Cart/index";
import OpenCart from "@/app/Cart/cart-open";

const HeaderMain = () => {
  return (
  
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold md:text-4xl sm:text-xl text-center pb-4 sm:pb-0 text-blackish">
          StyleShop
        </div>

        <div className="w-full sm:w-[200px] text-sm  md:w-[70%] relative sm:hidden md:block ">
          <input
            className="border-gray-200 border p-2 md:px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />

          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>

        <div className="flex gap-4 text-gray-500 text-[30px]">
          {/* <BiUser /> */}

          <div className="relative">
            {/* <FiHeart /> */}
            {/* <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div> */}
          </div>
          {/* <Link href={'/Cart'}>
            <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600  rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
            </div>
            </div>
          </Link> */}
          <div className="relative">
      
            <Suspense fallback={<OpenCart/>}>

            <Cart />
            </Suspense>
          
          
          </div>
        </div>
      </div>
    </div>
    
    
        
  );
};

export default HeaderMain;
