import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>

    <div className="lg:hidden w-full z-[999] m-auto mt-4">
      <div className="container ">
        <div className="flex  w-[100%]  gap-2 rounded-full border border-gray-200 border-lgopacity-40 bg-white bg-opacity-80 shadow-md mx-2 font-medium py-4 items-center justify-center text-[8px] text-blackish">
          <Link className="navbar__link relative" href="/">
            HOME
          </Link>
          <Link className="navbar__link relative" href="/">
            {`MEN'S`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`WOMEN'S`}
          </Link>
          <Link className="navbar__link relative" href="#">
            JEWELRY
          </Link>
          <Link className="navbar__link relative" href="#">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="#">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;