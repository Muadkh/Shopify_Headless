"use client"
import Price from "@/components/price";
import { Transition,Dialog } from '@headlessui/react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { Fragment, useEffect, useRef } from "react";
import { useState } from "react";
import OpenCart from "./cart-open";
import CloseCart from "./close-cart";
import Image from "next/image"
import EditItemQuantityButton from "./edit-item-quantity-button";
import DeleteItemButton from "./delete-item-button";
import { createUrl } from '../../lib/utils'
import { string } from "prop-types";
import { Cart } from "@/lib/shopify/types";
import { exit } from "process";
import { useRouter } from 'next/navigation';
type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart| undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const quantityRef = useRef(cart?.totalQuantity);
  // console.log("cart",cart)
  const router = useRouter()
  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }

  }, [isOpen, cart?.totalQuantity, quantityRef]);
  return (
    <> 
     
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-2 border-neutral-200 bg-white p-6 text-blackish backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white sm:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">My Cart</p>

                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              {!cart || cart.lines.edges.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16" />
                  <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                  <ul className="flex-grow overflow-auto py-4">
                    {cart.lines.edges.map((item:any ,index:any) => {
                      // console.log("item",item)
                      const merchandiseSearchParams = {} as MerchandiseSearchParams;

                      item.node.merchandise.selectedOptions.forEach(( name:any, value:any ) => {
                        if (value !== 'Default Title') {
                          // merchandiseSearchParams[name.toLowerCase()] = value;
                        }
                      });
                      const merchandiseUrl = createUrl(
                        `/product/${item.node.merchandise.product.handle}`,
                        new URLSearchParams(merchandiseSearchParams)
                      );
                      // console.log("merch",item.node.merchandise.product.handle)
                      return (
                        <li
                          key={item.node.merchandise.product.handle}
                          className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                        >
                          <div className="relative flex w-full flex-row justify-between px-1 py-4">
                            <div className="absolute z-40 -mt-2 ml-[55px]">
                              <DeleteItemButton item={item.node} />
                            </div>
                            <Link
                              href={"/"}
                              onClick={closeCart}
                              className="z-30 flex flex-row space-x-4"
                            >
                              <div className="relative h-16 w-24 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                <Image
                                  className="h-full w-full object-cover"
                                  width={64}
                                  height={64}
                                  alt={
                                    item.node.merchandise.product.featuredImage.altText ||
                                    item.node.merchandise.product.title
                                  }
                                  src={item.node.merchandise.product.featuredImage.url}
                                />
                              </div>

                              <div className="flex flex-1 flex-col text-base">
                                <span className="leading-tight">
                                  {item.node.merchandise.product.title}
                                </span>
                                {item.node.merchandise.title !== "Default Title" ? (
                                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    {item.node.merchandise.title}
                                  </p>
                                ) : null}
                              </div>
                            </Link>
                            <div className="flex h-16 flex-col justify-between">
                              <Price
                                className="flex justify-end space-y-2 text-right text-sm"
                                amount={item.node.estimatedCost.totalAmount.amount}
                                currencyCode={item.node.estimatedCost.totalAmount.currencyCode}
                              />
                              <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                <EditItemQuantityButton item={item} type="minus" />
                                <p className="w-6 text-center">
                                  <span className="w-full text-sm ">{item.node.quantity}</span>
                                </p>
                                <EditItemQuantityButton item={item} type="plus" />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                      <p>Taxes</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cart.cost.totalTaxAmount?.amount}
                        currencyCode={cart.cost.totalTaxAmount?.currencyCode}
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Shipping</p>
                      <p className="text-right">Calculated at checkout</p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Total</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                      />
                    </div>
                  </div>
                  <div>

                  <a
                    href={cart.checkoutUrl}
                    className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                    >
                    Proceed to Checkout
                  </a>
                    </div>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}