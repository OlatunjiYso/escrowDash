import Form from '@/app/ui/payments/create-form';
import Breadcrumbs from '@/app/ui/payments/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Payments', href: '/dashboard/payments' },
          {
            label: 'Create Payments',
            href: '/dashboard/payments/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}