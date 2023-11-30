"use client"
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export const SelectOptions = (props:any) => {
  const [qty,setQty]=useState(1)
   const Incqty= ()=>{
    
      setQty(qty+1)
  
    }
const Decqty= ()=>{
  if (qty !==1){
    setQty(qty-1)
  } 
  else {
    setQty(1)
  }
    
}
  return (
    <div> <div className=" flex font-medium text-[20px] ">
    <div className="flex   shrink gap-x-6 sm:flex-col lg:flex-row sm:m-auto ">
      <div className=" border-2 space-y-4  bg-gray-50 border-gray-500 rounded-xl dark:border-neutral-500"> 

      <h2 className=" font-medium text-[20px] border-none  rounded-full pl-2 pr-2 flex lg:items-center justify-left ">
        Quantity:
      </h2>
      <div className="flex lg:flex-row  justify-center gap-x-4  border-none  border-2 w-28 items-center rounded-lg text-gray-800 ">
        <span className="border-2 rounded-full border-gray-500 p-1 ">
        
           <AiOutlinePlus onClick={Incqty} size={12} className=""></AiOutlinePlus>
        
        </span>
        <span className="p-1 rounded-full">{qty}</span>
        <span className="border-2 rounded-full border-gray-500 p-1">
        

          <AiOutlineMinus onClick={Decqty} size={12}></AiOutlineMinus>

        </span>
      </div>
      </div>

           <div className="flex m-auto item-center justify-center font-medium text-[20px]"><h1> Size</h1></div>
      <div className="border-2  p-3 items-center justify-center m-auto rounded-xl bg-gray-50 border-gray-500  hover:border-blue-600 ">
        <div className="flex gap-4">
          <select
            className="text-gray-800 text-[12px] w-[70px] bg-gray-50 outline-none "
            name="Size"
            id="Size"
          >
            <option className="bg-gray-50" >{props.data.productByHandle.variants.edges[0].node.selectedOptions[1].value}</option>
           
          </select>
        </div>
      </div>
      <div className="flex m-auto item-center justify-center font-medium text-[20px]"><h1> Color</h1></div>
      <div className="border-2 items-center justify-center m-auto p-3  rounded-xl  bg-gray-50 border-gray-500  hover:border-blue-600">
        <div className="flex gap-4 ">
          <select
            className="text-gray-800 text-[12px] w-[70px]  bg-gray-50 outline-none "
            name="Colour"
            id="Colour"
          >
            <option className="bg-gray-50" > {props.data.productByHandle.variants.edges[0].node.selectedOptions[0].value}</option>
            

          </select>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
