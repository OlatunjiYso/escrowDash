import Pagination from '@/app/ui/payments/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/payments/table';
import { josefin } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchPaymentsPages } from '@/app/lib/data';

 
export default async function Page({ searchParams}: {
    searchParams?: {
        query?: string;
        page?: string;
        status?: string;
    }
}) {
    const query = searchParams?.query || '';
    const status = searchParams?.status || 'all';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchPaymentsPages(query, status);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${josefin.className} text-2xl`}>Payments</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search payments by name or email..." />
      </div>
       <Suspense key={query + currentPage + status} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} status={status} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}