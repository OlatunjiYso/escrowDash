import PaymentStatus from '@/app/ui/payments/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredPayments } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
  status
}: {
  query: string;
  currentPage: number;
  status: string;
}) {
  const payments = await fetchFilteredPayments(query, currentPage, status);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {payments?.map((payment) => (
              <div
                key={payment.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{`${payment.buyerFirstname} ${payment.buyerLastname}`}</p>
                    </div>
                    <p className="text-sm text-gray-500">{payment.buyerEmail}</p>
                    <div className="mb-2 mt-2 flex items-center">
                      <p>{`${payment.sellerFirstname} ${payment.sellerLastname}`}</p>
                    </div>
                    <p className="text-sm text-gray-500">{payment.sellerEmail}</p>
                  </div>
                  <PaymentStatus status={payment.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(payment.amount)}
                    </p>
                    <p>{formatDateToLocal(payment.date)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-500 md:table">
            <thead className="rounded-lg text-left text-md text-black">
              <tr>
              <th scope="col" className="px-2 py-5 font-medium sm:pl-4">
                  S/N
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Buyer
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Seller
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                 Trust Account
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {payments?.map((payment, index) => (
                <tr
                  key={payment.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                   <td className="whitespace-nowrap pl-6 py-3">
                    { (currentPage - 1) * 12 + (index + 1) }
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {`${payment.buyerFirstname} ${payment.buyerLastname}`}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {payment.buyerEmail}
                    </p>
                  </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {`${payment.sellerFirstname} ${payment.sellerLastname}`}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {payment.sellerEmail}
                    </p>
                  </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {payment.trustAccount}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(payment.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(payment.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <PaymentStatus status={payment.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
