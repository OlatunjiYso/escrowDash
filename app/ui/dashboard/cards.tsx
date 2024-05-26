import { fetchPaymentAnalyticsData } from '@/app/lib/data';
import PaymentAnalyticsSection from './cardsSection';
   
  export default async function CardWrapper() {
    const cardData = await fetchPaymentAnalyticsData();
    return (
        <PaymentAnalyticsSection paymentAnalyticsInfo={cardData}/>
    );
  }
  

  