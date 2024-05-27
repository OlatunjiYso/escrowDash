// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestPayments from '@/app/ui/dashboard/latest-payments';
// import { josefin } from '@/app/ui/fonts';
// import { Suspense } from 'react';
// import {  } from '@/app/ui/skeletons';
// import { LatestPaymentsSkeleton, CardsSkeleton, RevenueChartSkeleton} from '@/app/ui/skeletons';
// import CardWrapper from '@/app/ui/dashboard/cards';
// import {  } from '@/app/ui/skeletons';

// export default async function Page() {
//   return (
//     <main>
//       <h1 className={`${josefin.className} mb-4 text-xl md:text-2xl`}>
//         Dashboard
//       </h1>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         <Suspense fallback={<CardsSkeleton />}>
//           <CardWrapper />
//         </Suspense>
//       </div>
//       <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
//         <Suspense fallback={<RevenueChartSkeleton />}>
//           <RevenueChart />
//         </Suspense>
//         <Suspense fallback={<LatestPaymentsSkeleton />}>
//           <LatestPayments />
//         </Suspense>
//       </div>
//     </main>
//   );
// }

import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-payments';
import { josefin } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import { LatestPaymentsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import { CardsSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 className={`${josefin.className} mb-2 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-1">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestPaymentsSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

