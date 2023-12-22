import { getCart } from './actions';
import { cookies } from 'next/headers';

import { Suspense } from 'react';
import CartModal from './modal';
export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;

let cart  
  if (cartId) {
    console.log("cart","gerring cart")

      cart = await getCart({cartId});
  
  }
  return   <CartModal cart={cart}/>
  
     
}