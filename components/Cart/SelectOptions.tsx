"use clint"
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export const SelectOptions = (props:any) => {

  return (
    <div> <div className=" flex font-medium text-[20px] ">
    <div className="flex   shrink gap-x-6 sm:flex-col lg:flex-row  ">
      <div className=" border-2 space-y-4  bg-gray-300 border-gray-500 rounded-xl"> 

      <h2 className=" font-medium text-[20px] border-none  rounded-full pl-2 pr-2 flex items-center justify-left ">
        Quantity:
      </h2>
      <div className="flex lg:flex-row  justify-center gap-x-4  border-none  border-2 w-28 items-center rounded-lg text-gray-800 ">
        <span className="border-2 rounded-full border-gray-500 p-1 ">
          <AiOutlinePlus size={12} className=""></AiOutlinePlus>
        </span>
        <span className="p-1 rounded-full">1</span>
        <span className="border-2 rounded-full border-gray-500 p-1">
          <AiOutlineMinus size={12}></AiOutlineMinus>
        </span>
      </div>
      </div>

           <div className="flex m-auto item-center justify-center font-medium text-[20px]"><h1> Size</h1></div>
      <div className="border-2  p-3 items-center justify-center m-auto rounded-xl bg-gray-300 border-gray-500  hover:border-blue-600 ">
        <div className="flex gap-4">
          <select
            className="text-gray-800 text-[12px] w-[70px] bg-gray-300 outline-none "
            name="Size"
            id="Size"
          >
            <option className="bg-black" >{props.data.productByHandle.variants.edges[0].node.selectedOptions[1].value}</option>
           
          </select>
        </div>
      </div>
      <div className="flex m-auto item-center justify-center font-medium text-[20px]"><h1> Color</h1></div>
      <div className="border-2 items-center justify-center m-auto p-3  rounded-xl  bg-gray-300 border-gray-500  hover:border-blue-600">
        <div className="flex gap-4 ">
          <select
            className="text-gray-800 text-[16px] w-[70px]  bg-gray-300 outline-none "
            name="Colour"
            id="Colour"
          >
            <option > {props.data.productByHandle.variants.edges[0].node.selectedOptions[0].value}</option>
            

          </select>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
