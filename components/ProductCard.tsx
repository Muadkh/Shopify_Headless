"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
  compare: string;
  handle: string;

}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
  compare,
  handle,

}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 sm:text-[8px] md:text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 sm:text-[8px] md:text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 sm:text-[8px] md:text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 sm:text-[8px] md:text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 sm:text-[8px] md:text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };
  
  return (
    <>
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] hover:border-gray-400 ">
      <Link
        href={{
          pathname: `/Pages/${handle}`,
          query: {
            title: title,
            img: img,
            price: price,
            desc: desc,
            handle: handle,
      
          },
        }}
      >
        <div>
          <Image
            className="w-full h-auto mt-8 md:mb-24 sm:bm-16 hover:scale-105 transition ease-in-out"
            src={img}
            width={200}
            height={300}
            alt={title}
          />
        </div>

        <div className="space-y-2  py-2 sm:text-[8px] md:text-[16px] ">
          <h2 className="text-pink-800  font-medium uppercase">{title}</h2>
          <p className="text-gray-800 max-w-[150px]">{desc}</p>
          <div>{generateRating(rating)}</div>

          <div className="font-bold flex gap-4">
            Rs {parseInt(price)}
            <del className="text-gray-700 font-normal">
               {parseInt(compare)}
            </del>
          </div>
        </div>
      </Link>
    </div>
          </>
  );
};

export default ProductCard;
