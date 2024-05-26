"use client";

import React, { useMemo, useState } from "react";
import {
  BanknotesIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/24/outline";
import { josefin } from "@/app/ui/fonts";
import clsx from "clsx";

type PaymentAnalyticsPoint = "daily" | "monthly" | "weekly" | "yearly";

type PaymentInfo = {
  pending: number;
  successful: number;
  disputed: number;
  returned: number;
};
type PaymentAnalytics = {
  paymentAnalyticsInfo: {
    daily: PaymentInfo;
    weekly: PaymentInfo;
    monthly: PaymentInfo;
    yearly: PaymentInfo;
  };
};

const iconMap = {
  successful: BanknotesIcon,
  pending: ClockIcon,
  disputed: ChatBubbleLeftRightIcon,
  returned: ReceiptRefundIcon,
};

const PaymentAnalyticsSection = ({
  paymentAnalyticsInfo,
}: PaymentAnalytics) => {
  const [mode, setMode] = useState<PaymentAnalyticsPoint>("daily");
  const currentAnalytics = paymentAnalyticsInfo[mode];

  const sectionTitle = useMemo(()=>{
   return mode === 'daily' ? 'Payment Report Today' :
   mode === 'weekly' ? "Payment Report This Week" :
   mode === 'monthly' ? 'Payment Report This Month' : 
   "Payment Report This Year"
  }, [mode])
  const handleModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.value as PaymentAnalyticsPoint);
  };

  return (
    <div className="mb-16 border-2 border-gray-100 p-6 rounded-md">
      <div className="mb-6 mt-4 text-gray-600">
        <h4>{ sectionTitle}</h4>
      </div>
      <div className="flex justify-normal gap-8 border-2 border-gray-300 rounded-lg md:w-4/12 px-2 py-1 shadow-lg">
        <div className="flex text-gray-500 ">
          <input
            className="mr-1 mt-1"
            id="daily"
            name="daily"
            type="radio"
            value="daily"
            onChange={handleModeChange}
            checked={mode === "daily"}
          />
          <label className="mt-0.5" htmlFor="daily">
            Daily
          </label>
        </div>
        <div className="flex text-gray-500">
          <input
            className="mr-1 mt-1"
            id="weekly"
            name="weekly"
            type="radio"
            value="weekly"
            onChange={handleModeChange}
            checked={mode === "weekly"}
          />
          <label className="mt-0.5" htmlFor="weekly">
            Weekly
          </label>
        </div>
        <div className="flex text-gray-500">
          <input
            className="mr-1 mt-1"
            id="monthly"
            name="monthly"
            type="radio"
            value="monthly"
            onChange={handleModeChange}
            checked={mode === "monthly"}
          />
          <label className="mt-0.5" htmlFor="monthly">
            Monthly
          </label>
        </div>
        <div className="flex text-gray-500">
          <input
            className="mr-1 mt-1"
            id="yearly"
            name="yearly"
            type="radio"
            value="yearly"
            onChange={handleModeChange}
            checked={mode === "yearly"}
          />
          <label className="mt-0.5" htmlFor="yearly">
            Yearly
          </label>
        </div>
      </div>
      <br />
      <div className=" block md:flex justify-between gap-6">
        <Card
          title="Successful"
          value={currentAnalytics.successful}
          type="successful"
        />
        <Card title="Pending" value={currentAnalytics.pending} type="pending" />
        <Card
          title="Disputed"
          value={currentAnalytics.disputed}
          type="disputed"
        />
        <Card
          title="Returned"
          value={currentAnalytics.returned}
          type="returned"
        />
      </div>
    </div>
  );
};

function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "successful" | "pending" | "disputed" | "returned";
}) {
  const Icon = iconMap[type];

  return (
    <div className='rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col grow border-2 border-blue-100'>
      <div className="flex p-4">
        {Icon ? <Icon className={clsx(
                  'h-5 w-5',
                  {
                    'text-green-400': type === 'successful',
                    'text-gray-500': type === 'pending',
                    'text-yellow-400': type === 'disputed',
                    'text-red-400': type === 'returned',
                  },
                )}/> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
       className='truncate rounded-xl bg-white px-4 py-8 text-center text-3xl text-gray-400'
      >
        {value}
      </p>
    </div>
  );
}

export default PaymentAnalyticsSection;

