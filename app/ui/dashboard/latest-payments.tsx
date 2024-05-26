import { josefin } from '@/app/ui/fonts';
import { fetchMonthlyPayments } from '@/app/lib/data';
import AppPieChart from './pieChart';

export default async function LatestInvoices() {
  const monthlyPayments = await fetchMonthlyPayments();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${josefin.className} mb-4 text-xl md:text-2xl`}>
       Payments this Month
      </h2>
      <AppPieChart data={monthlyPayments}/>
    </div>
  );
}
