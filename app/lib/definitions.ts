export type User = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    imageUrl: string;
  };
  
  export type Customer = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    imageUrl: string;
  };
  
  export type Revenue = {
    month: string;
    revenue: number;
  };
  
  export type Payment = {
    id: string;
    buyerFirstname: string;
    buyerLastname: string;
    sellerFirstname: string;
    sellerLastname: string;
    buyerEmail: string;
    sellerEmail: string;
    date: string;
    amount: number;
    trustAccount: string;
    status: 'pending' | 'paid' | 'disputed' | 'returned';
  };

  export type PaymentForm = {
    id: string;
    buyerEmail: string;
    sellerEmail: string;
    amount: number;
    status: 'pending' | 'paid' | 'disputed' | 'returned';
  };

  export type PaymentUpdate = {
    buyerEmail: string;
    sellerEmail: string;
    amount: number;
    status: 'pending' | 'paid' | 'disputed' | 'returned';
  };

  export type CustomerField = {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
  };

  