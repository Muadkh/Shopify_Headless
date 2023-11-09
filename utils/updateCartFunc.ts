import { cookies, headers } from 'next/headers'
import React from 'react'

const updateCartFunc = async (query: any, variables: {
    cartId: string | undefined;
    lines: { merchandiseId: string; quantity: number };
  },cache={cache: 'nos-tore'}) => {
 console.log("update",query)
 console.log(variables)
      
      
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
    export default updateCartFunc
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   xport async function updateCart(
//     cartId: string,
//     lines: { id: string; merchandiseId: string; quantity: number }
//   ){
//     const res = await fetch({
//       query: editCartItemsMutation,
//       variables: {
//         cartId,
//         lines
//       },
//       cache: 'no-store'
//     });
  
//     return res
//   }