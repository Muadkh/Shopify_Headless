import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { removeItem, updateItemQuantity } from './actions';
import LoadingDots from '../../components/loading-dots';

export default function EditItemQuantityButton({
  item,
  type
}: {
  item: any;
  type: 'plus' | 'minus';
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
// console.log("item",item.node.quantity)
  return (
    <button
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      onClick={() => {
        startTransition(async () => {
          const error =
            type === 'minus' && item.node.quantity - 1 === 0
          
              ? await removeItem(item.node.id)
              : await updateItemQuantity({
                  lineId: item.node.id,
                  variantId: item.node.merchandise?.id,
                  quantity: type === 'plus' ? item.node.quantity + 1 : item.node.quantity - 1
                  
                });

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'cursor-not-allowed': isPending,
          'ml-auto': type === 'minus'
        }
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === 'plus' ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}
