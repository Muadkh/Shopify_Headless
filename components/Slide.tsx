import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return ( <>
    <div className="outline-none border-none relative ">
      <div className="absolute left-[8px] md:left-[70px] sm:w-[125px] md:w-[400px] top-[50%]  -translate-y-[50%] space-y-2  lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-pink-800 sm:text-[10px] md:text-[16px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish sm:text-[10px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>

        <h3 className=" sm:text-[8px] md:text-[16px] lg:text-[24px] text-gray-700">
          starting at{" "}
          <b className="sm:text-[8px] md:text-[16px] lg:text-[24px]">{price}</b>
          .00
        </h3>
        <div className="bg-black text-white lg:text-[14px] sm:text-[8px] md:text-[16px] sm:p-1 sm:px-2 md:p-2 md:px-4 rounded-lg inline-block cursor-pointer hover:bg-blue-600">
          Shop Now
        </div>
      </div>

      <Image
        className="w-[100%] h-auto  rounded-xl object-cover object-right md:object-left-bottom "
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
        </>
  );
};

export default Slide;