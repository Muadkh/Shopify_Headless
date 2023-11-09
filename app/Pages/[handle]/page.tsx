
import React, { Suspense, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Marquee from "react-fast-marquee";
import { AddtoCart } from "@/components/Cart/AddtoCart";
import {SelectOptions} from '../../../components/Cart/SelectOptions'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import StoreFrontFunc from "@/utils/StoreFrontFunc";
import ProductCard from "@/components/ProductCard";
import gql from "graphql-tag";
import { ImageResponse } from "next/server";
import Link from "next/link";
import ScroolingProd from "@/components/ScroolingProd";
import { createCart } from "@/app/Cart/actions";
import { SelectionRange } from "typescript";
import { RelatedProducts } from "@/components/RelatedProducts";
import {ProductImages} from '../../../components/Cart/ProductImages'


const query = `query SingleProduct($handle:String!){ 
  productByHandle(handle:$handle){
    descriptionHtml
    title 
    handle 
    images(first:4){
      edges{
        node{
          url
          
        }
      }
    }
    variants(first:100){
      edges{
        node{
          id
          title
          selectedOptions{
            name
            value
          }
        }
      }
    }
}
}`;




const ProductDetails = async(params:any) => {
  // console.log(params.params.handle)
   const {price,desc,title,img}=params.searchParams
  const { data} = await StoreFrontFunc(query, { handle: params.params.handle});
  const images = data.productByHandle.images;
  const descr = data.productByHandle.descriptionHtml;
// console.log(data.productByHandle.variants.edges[0])

  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-gray-200 mt-4 p-8  md:p-12 lg:flex-row lg:gap-8">
          <ProductImages images={images} img={img}></ProductImages>

          <div className="basis-full pl-4 lg:basis-3/6 border-2 space-y-2 font-medium ">
            <h1 className="font-bold  text-blackish uppercase text-[20px] ">
              {title}
            </h1>
            <div className="flex gap-1 text-[20px] text-[#FF9529] ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <h4 className="font-bold  text-blackish text-[20px]">Details: </h4>
             <div className="font-normal  text-blackish flex flex-wrap text-[16px]">
              {ProductDescription(data.productByHandle)}
            </div>
            <div className="font-bold text-blackish text-[20px]">
              Rs: {parseInt(price)}
            </div>
           <SelectOptions data={data}></SelectOptions>
          <AddtoCart  selectedVarientid={data.productByHandle.variants.edges[0].node.id}></AddtoCart>

          </div>
        </div>
      </div>
<div className="m-20 ">
  {
   

     RelatedProducts()
 
  
  }
</div>
    </>
  );
};
export default ProductDetails;


export function ProductDescription({ descriptionHtml }: any) {
  return <div dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>;
}

