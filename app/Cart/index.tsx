import { getCart } from './actions';
import { cookies } from 'next/headers';
import CartModal from './modal';
import { Suspense } from 'react';
export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;

let cart  
  if (cartId) {
    cart = await getCart({cartId});
  
  }

  return <Suspense>
  <CartModal cart={cart}/>
     </Suspense> 
}