import Form from "@/app/ui/payments/edit-form";
import Breadcrumbs from "@/app/ui/payments/breadcrumbs";
import { fetchCustomers, fetchPaymentById } from "@/app/lib/data";
import { initAction } from "@/app/lib/action";

export default async function Page({ params }: { params: { id: string } }) {
  await initAction();
  const id = params.id;
  const [payment, customers] = await Promise.all([
    fetchPaymentById(id),
    fetchCustomers(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form payment={payment} customers={customers} />
    </main>
  );
}
