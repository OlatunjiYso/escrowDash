import { unstable_noStore as noStore } from 'next/cache';
import dummyData from './database';

const LIMIT = 12;
export async function fetchPaymentAnalyticsData() {
  noStore();
  try {
    const daily = {
      pending : 5,
      successful: 25,
      disputed: 1,
      returned: 0,
    }
    const weekly = {
      pending : 9,
      successful: 120,
      disputed: 15,
      returned: 5,
    }
    const monthly = {
      pending : 10,
      successful: 450,
      disputed: 35,
      returned: 12,
    }
    const yearly = {
      pending: 18,
      successful: 930,
      disputed: 45,
      returned: 22,
    }
    return { daily, weekly, monthly, yearly };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchRevenue() {
    noStore();
    try {
      return dummyData.revenue;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }

  export async function fetchMonthlyPayments() {
    noStore();
    try {
      return [
        { name: 'Successful', value: 800 },
        { name: 'Pending', value: 350 },
        { name: 'Disputed', value: 100 },
        { name: 'Returned', value: 50 },
      ]
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }

  export async function filteredPayments(term: string, status: string) {
    let paymentsToConsider = dummyData.payments;
   if(status !=='all') {
    paymentsToConsider = dummyData.payments.filter((payment)=> payment.status === status)
   }

    const matchingPayments = paymentsToConsider.filter((payment)=> (
      payment.buyerEmail.toLowerCase().includes(term.toLowerCase()) ||
      payment.sellerEmail.toLowerCase().includes(term.toLowerCase()) ||
      payment.buyerFirstname.toLowerCase().includes(term.toLowerCase()) ||
      payment.buyerLastname.toLowerCase().includes(term.toLowerCase()) ||
      payment.sellerFirstname.toLowerCase().includes(term.toLowerCase()) ||
      payment.sellerLastname.toLowerCase().includes(term.toLowerCase()) )
    );
    return matchingPayments;
  }

  export async function fetchFilteredPayments(term: string, page: number, status: string) {
    const matchingPayments = await filteredPayments(term, status);
    if (matchingPayments.length === 0) return matchingPayments;
    if (matchingPayments.length <= LIMIT) return matchingPayments;
    const seenItems = page*LIMIT-1
    return  matchingPayments.slice(seenItems, seenItems+LIMIT);
  }

  export async function fetchPaymentsPages(term: string, status: string) {
    const matchingPayments = await filteredPayments(term, status)
    const totalPages = Math.ceil(Number(matchingPayments.length) / LIMIT);
    return totalPages;
  }