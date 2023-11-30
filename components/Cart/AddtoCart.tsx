"use client"

import { addItem } from '@/app/Cart/actions';
import router, { useRouter } from 'next/navigation';
import React, {  useTransition } from 'react'

export const AddtoCart = (props:any) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter()
 
  return (
    <div>

<div className="buttons flex sm:flex-col gap-x-4 lg:flex-row p-8 items-center justify-center">
              <button type="button" className='add-to-cart'
              onClick={()=>{
             startTransition(async () => {
              const error = await addItem(props.selectedVarientid);
              // console.log(error)
              if (error) {
                // Trigger the error boundary in the root error.js
                // console.log(error)
                throw Error(error.toString());
              }
    
              router.refresh()
            });


              }}
            >
                Add to Cart
              </button>
            </div>

    </div>
  )
}
