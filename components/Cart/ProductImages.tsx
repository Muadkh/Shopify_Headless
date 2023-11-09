"use client"
import React, { useState } from 'react'
import Image from 'next/image'
export const ProductImages = (props:any) => {
 const [im, setIm]= useState(props.img)   
  return (
    <>
    <div className=" relative   h-full w-full basis-full flex-col lg:basis-3/6 border-2 border-gray-200 transition ease-in-out hover:scale-105 hover:border-gray-400">
            <Image
              className="flex sm:items-center sm:justify-center m-auto transition ease-in-out"
              src={im}
              height={500}
              width={"400"}
              alt="test"
              priority={true}
            ></Image>
          </div>
          <div className="border-2 p-4 relative flex lg:flex-col flex-shrink items-center  justify-center h-full sm:flex-row">
            {props.images.edges.map((item: any, index: number) => (
              <div className="m-2 border-2 border-red-400 " 
              key={index}
              >
                <Image
                
                  src={item.node.url}
                  height={80}
                  width={80}
                  alt={"test"}
                  onMouseEnter={()=> setIm(item.node.url)}
                ></Image>
              </div>
            ))}
          </div>
          
          </>

  )
}
