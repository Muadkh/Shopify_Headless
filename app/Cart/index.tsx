import { getCart } from './actions';
import { cookies } from 'next/headers';
import CartModal from './modal';
export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;

let cart  
  if (cartId) {
    cart = await getCart({cartId});
  // console.log("index",cart)
  // console.log(cartId)
  }

  return <CartModal cart={cart} />;
}