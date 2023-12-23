"use server"
import StoreFrontFunc from "@/utils/StoreFrontFunc";
import addTocartFunc from "@/utils/addTocartFunc";
import removeFromCartFunc from "@/utils/removeFromCartFunc";
import updateCartFunc from "@/utils/updateCartFunc";
import { cookies } from "next/headers";
import { ReadonlyURLSearchParams } from 'next/navigation';
import { editCartItemsMutation, removeFromCartMutation } from "@/lib/shopify/mutations/cart";

const query = `mutation cartCreate {
    cartCreate {
      cart {
        id
      createdAt
      updatedAt
      lines(first:10) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }

      }
      attributes {
        key
        value
      }
      estimatedCost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
    
    }
  }
}`;



const query1=` query GetCart($cartId: ID!) {
  cart(id: $cartId) {
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          quantity
          id
          estimatedCost {
            subtotalAmount {
              amount
              currencyCode
            }
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              title
              id
              product {
                title
                id
              handle
            availableForSale
           description
        descriptionHtml
        options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      url
      altText
      width
      height
    }
    images(first: 20) {
      edges {
        node {
           url
      altText
      width
      height
        }
      }
    }
              }
              priceV2 {
                amount
                currencyCode
              }
              selectedOptions{
                name
                value
              }
        
            }
          }
        }
      }
    }
    totalQuantity
  }
}`

const query2=`mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      id
      checkoutUrl
      cost {
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
      }
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                selectedOptions {
                  name
                  value
                }
              
              }
            }
          }
        }
      }
    totalQuantity
  }
}
}`
export async function addItem(variantId: string | undefined) {
  // console.log("variant",variantId)
  let cartId = cookies().get("cartId")?.value;
  let cart;
  if (!cartId ) {
    await createCartFunc();
     
  }
  
  if (!variantId) {
    return "Missing product variant ID";
  }
  
  try {
    cartId = cookies().get("cartId")?.value;
    console.log(cartId)
    await addTocartFunc(query2,{cartId, lines:[{ merchandiseId: variantId, quantity: 1 }]});
      const cart=await getCart({cartId} );
  
  
  }
  catch (e) {
    return 'Error adding item to cart';
  }
  
  // if (cartId) {
  // const cart=await getCart({ cartId });
  // console.log("cart",cart)
  
  // }
}


export async function getCart(props: { cartId: string|undefined }) {
  const cartId=props.cartId
  // console.log("cartID",cartId)
   const {data}=await StoreFrontFunc(query1,  {cartId} );
     return data.cart
}
export async function createCartFunc() {
  const {data}  = await StoreFrontFunc(query);
  const CheckoutUrl = data?.cartCreate?.cart.checkoutUrl;
  const cartId = data?.cartCreate?.cart.id;
  // console.log(data?.cartCreate?.cart.id)
  cookies().set("cartId", cartId);
  return
}




export const removeItem = async (lineIds: string): Promise<String | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }
  try {
  await removeFromCartFunc(removeFromCartMutation , {cartId:cartId, lineIds:[lineIds]});
} catch (e) {
  return 'Error removing item from cart';
}
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<String | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }
  try {
    const data=await updateCartFunc(editCartItemsMutation,{cartId, lines:
      {
        id:lineId,
        merchandiseId: variantId,
        quantity
      }
    });
  } catch (e) {
    return 'Error updating item quantity';
  }
};

