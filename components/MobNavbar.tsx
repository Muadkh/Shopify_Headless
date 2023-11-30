
'use client'
import React, { useState } from "react";

import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import Link from "next/link";
import MobMenue from "./MobMenue";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const MobNavbar = () => {
  const initialValue=false
  const [toogle, setToggle] = useState(initialValue);
  const [colour, setColour]= useState("black")
  const handleClick = () => {
    setToggle(!toogle);
    if (colour == "black") {
      setColour("blue")
    }
    else{
      setColour("black")
    }
console.log(colour)
  };
  return (
      <>
    <div className="lg:hidden   fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8 z-40">
      <div className="flex justify-between text-[28px] py-2 ">
        <button onClick={handleClick} className="" >
           <IoMenuOutline color={`${colour}`} />
          </button>
         <Link href="/">
         <AiOutlineHome />
         </Link>
        <div className="relative ">
                  <ShoppingCartIcon className="h-8 "  />
           <div className="bg-red-600 rounded-full absolute top-0 right-0  w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0 
          </div>
          
        </div>
        {/* <div className="relative">
          <FiHeart />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
          0
          </div>
        </div> */}

        {/* <AiOutlineAppstore /> */}
      </div>
    </div>
   <div >{toogle && <MobMenue />}</div>
      </>
  );
};

export default MobNavbar;