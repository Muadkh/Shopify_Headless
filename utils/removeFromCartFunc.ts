import { cookies, headers } from 'next/headers'
import React from 'react'

const removeFromCartFunc = async (query: any, variables={},cache={cache: 'no-cache'}) => {
// console.log("varR",variables)
  
  
  try{
    
    const responce=  await fetch( process.env.NEXT_PUBLIC_API_URL as string,
      { method: 'POST',
      headers:{
        "Content-Type":"application/json",
        "X-Shopify-Storefront-Access-Token":process.env.NEXT_PUBLIC_ACCESS_TOKEN as string,
      },
      body:JSON.stringify({query, variables,cache}),
  
      
    })
    
    
  
    return responce.json()
  }
  catch(error:any){
    return error.message 
  }    
}
export default removeFromCartFunc


















// export async function removeFromCart(cartId: string, lineIds: string){
//     const res = await fetch<ShopifyRemoveFromCartOperation>({
//       query: removeFromCartMutation,
//       variables: {
//         cartId,
//         lineIds
//       },
//       cache: 'no-store'
//     });
  
//     return res
//   }
  
  