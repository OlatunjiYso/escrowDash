'use client';

import { CustomerField, PaymentForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyEuroIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  ReceiptRefundIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updatePayment } from '@/app/lib/action';

export default function EditPaymentForm({
  payment,
  customers,
}: {
  payment: PaymentForm;
  customers: CustomerField[];
}) {
    const updatePaymentWithId = updatePayment.bind(null, payment.id);
   
  return (
    <form action={updatePaymentWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Buyer Email */}
        <div className="mb-4">
          <label htmlFor="buyer" className="mb-2 block text-sm font-medium">
            Choose buyer
          </label>
          <div className="relative">
            <select
              id="buyer"
              name="buyerEmail"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={payment.buyerEmail}
            >
              <option value="" disabled>
                Select a buyer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.email}>
                  {customer.email}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

            {/* Seller Name */}
             <div className="mb-4">
          <label htmlFor="seller" className="mb-2 block text-sm font-medium">
            Choose seller
          </label>
          <div className="relative">
            <select
              id="seller"
              name="sellerEmail"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={payment.sellerEmail}
            >
              <option value="" disabled>
                Select a seller
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.email}>
                  {customer.email}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                defaultValue={payment.amount}
                placeholder="Enter Euro amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyEuroIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

         {/* Invoice Status */}
         <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  defaultChecked={payment.status === 'pending'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  defaultChecked={payment.status === 'paid'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="disputed"
                  name="status"
                  type="radio"
                  value="disputed"
                  defaultChecked={payment.status === 'disputed'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="disputed"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Disputed <ChatBubbleLeftRightIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="returned"
                  name="status"
                  type="radio"
                  value="returned"
                  defaultChecked={payment.status === 'returned'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="returned"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Returned <ReceiptRefundIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/payments"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
