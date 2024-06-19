
var path = require('path');
import { promises as fs } from 'fs';

import { unstable_noStore as noStore } from 'next/cache';
import appData from './dataAccess';
import { Payment, PaymentUpdate } from './definitions';

const DB_PATH = process.cwd() + '/app/lib/database.json';
const LIMIT = 12;
function delay(time: number){
  return new Promise((resolve, _)=> setTimeout(resolve, time));
}
export async function fetchPaymentAnalyticsData() {
  noStore();
  await delay(150);
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
    await delay(200);
    try {
      return appData.revenue;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }

  export async function fetchCustomers() {
    noStore();
    await delay(200);
    try {
      return appData.customers.slice(0,13);
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch customers.');
    }
  }

  export async function fetchMonthlyPayments() {
    noStore();
    try {
      await delay(600);
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
    await delay(100);
    let paymentsToConsider = appData.payments;
   if(status !=='all') {
    paymentsToConsider = appData.payments.filter((payment:Payment)=> payment.status === status)
   }
    const matchingPayments = paymentsToConsider.filter((payment: Payment)=> (
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
    const seenItems = (page-1)  * LIMIT;
    return  matchingPayments.slice(seenItems, seenItems+LIMIT);
  }

  export async function fetchPaymentsPages(term: string, status: string) {
    const matchingPayments = await filteredPayments(term, status)
    const totalPages = Math.ceil(Number(matchingPayments.length) / LIMIT);
    return totalPages;
  }

  export async function getParticipant(email: string) {
    const index = Math.floor(Math.random() * 11);
    const participant = appData.customers.find((customer)=> customer.email === email) || appData.customers[index]
    return participant;
  }

  export async function addPayment(newEntry: Payment) {
  const file = await fs.readFile(DB_PATH, 'utf8');
  let data = JSON.parse(file);
   newEntry = JSON.parse(JSON.stringify(newEntry))
  const updated = [ newEntry , ...data];
  fs.writeFile(DB_PATH, JSON.stringify(updated));
  appData.payments = [ newEntry, ...appData.payments]
  }

  export async function updatePaymentById(id: string, paymentUpdate: PaymentUpdate) {
    const file = await fs.readFile(DB_PATH, 'utf8');
    let data: Payment[] = JSON.parse(file);
    let concernedPayment:Payment = {} as Payment;
    let restPayments: Payment[] = []
     data.forEach((pay)=>{
      if(pay.id === id) {
        concernedPayment = pay
      } else {
        restPayments.push(pay);
      }
    });

    concernedPayment.amount = paymentUpdate.amount;
    concernedPayment.buyerEmail = paymentUpdate.buyerEmail;
    concernedPayment.sellerEmail = paymentUpdate.sellerEmail;
    concernedPayment.status = paymentUpdate.status;

    restPayments = [ concernedPayment, ...restPayments]
    fs.writeFile(DB_PATH, JSON.stringify(restPayments));
    appData.payments = restPayments;
  }

  export async function deletePaymentById(id: string) {
    const restPayments = appData.payments.filter((payment: Payment)=> payment.id !== id);
    fs.writeFile(DB_PATH, JSON.stringify(restPayments));
    appData.payments = restPayments;
  }

  export async function fetchPaymentById(id: string) {
    const payment: Payment = appData.payments.find((pay:Payment)=> pay.id === id);
    return payment;
  }