import { cookies, headers } from "next/headers";
import React from "react";

const addTocartFunc = async (
  query: any,
  variables: {
    cartId: string | undefined;
    lines: { merchandiseId: string; quantity: number }[];
  },
  cache = { cache: "" }
) => {
  try {
    const responce = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env
          .NEXT_PUBLIC_ACCESS_TOKEN as string,
      },
      body: JSON.stringify({ query, variables, cache }),
    });

    //   console.log(query)
    //  console.log("id",cartId)
    // console.log("car",variables)
    // console.log("li",lines)

    return responce.json();
  } catch (error: any) {
    return error.message;
  }
};
export default addTocartFunc;
