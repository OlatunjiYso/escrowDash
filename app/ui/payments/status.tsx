import { CheckIcon, ClockIcon, ChatBubbleLeftRightIcon, ReceiptRefundIcon } from '@heroicons/react/24/outline';

import clsx from 'clsx';

export default function PaymentStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
          'bg-yellow-200 text-white-500': status === 'disputed',
          'bg-red-400 text-white': status === 'returned',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'disputed' ? (
        <>
          Disputed
          <ChatBubbleLeftRightIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'returned' ? (
        <>
          Returned
          <ReceiptRefundIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
