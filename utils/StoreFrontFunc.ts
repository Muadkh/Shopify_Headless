

import { cookies, headers } from 'next/headers'
import React from 'react'

const StoreFrontFunc = async (query:any ,variables={}, cache={cache: 'force-cache'}) => {
  console.log("api key",variables)
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
export default StoreFrontFunc
