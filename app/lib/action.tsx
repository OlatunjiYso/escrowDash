"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addPayment, getParticipant } from "./data";


const FormSchema = z.object({
  id: z.string(),
  buyerFirstname: z.string(),
  buyerLastname: z.string(),
  sellerFirstname: z.string(),
  sellerLastname: z.string(),
  buyerEmail: z.string(),
  sellerEmail: z.string(),
  date: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid", "returned", "disputed"]),
  trustAccount: z.string(),
  transactionId: z.string()
});

const CreatePayment = FormSchema.omit({
  id: true,
  date: true,
  buyerFirstname: true,
  buyerLastname: true,
  sellerFirstname: true,
  sellerLastname: true,
  trustAccount: true,
  transactionId: true
});

const generateRandomString = (count: number)=> (
    "x".repeat(count)
  .replace(/./g, c => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62) ] )
)
export async function createPayment(formData: FormData) {
  const { buyerEmail, sellerEmail, amount, status } = CreatePayment.parse({
    buyerEmail: formData.get("buyerEmail"),
    sellerEmail: formData.get("sellerEmail"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const date = new Date().toISOString().split("T")[0];
  const buyer = await getParticipant(buyerEmail);
  const seller = await getParticipant(sellerEmail);
  const id = generateRandomString(8)
  const transactionId = generateRandomString(12)

  const newEntry = FormSchema.parse({
    id,
    date,
    amount,
    status,
    transactionId,
    buyerFirstname: buyer.firstname,
    buyerLastname: buyer.lastname,
    sellerFirstname: seller.firstname,
    sellerLastname: seller.lastname,
    buyerEmail: buyer.email,
    sellerEmail: seller.email,
    trustAccount: 'Paypal'
  });
  console.log('bout adding!!')
  await addPayment(newEntry);
  // persist record
  revalidatePath("/dashboard/payments");
  redirect("/dashboard/payments");
}
