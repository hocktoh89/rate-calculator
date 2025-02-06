import { RATE_API_URL } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchRates(source?) {

  const queryParams = source ? `&format=1&source=${source}` : '';

    const res = await fetch(`${RATE_API_URL}/live?access_key=${process.env.NEXT_PUBLIC_RATE_API_ACCESS}${queryParams}`);   
 
    if (!res.ok) throw new Error("Failed to fetch rates");
    return res.json();
  }

  // TO-DO: current subscriptions versions not supported hence cannot be used.
  export async function convertCurrency(payAmt?, payCurrency?, receiveCurrency?) {
    const res = await fetch(`${RATE_API_URL}/convert?access_key=${process.env.NEXT_PUBLIC_RATE_API_ACCESS}&from=${payCurrency}&to=${receiveCurrency}&amount=${payAmt}`);
    if (!res.ok) throw new Error("Failed to convert rates");
    return res.json();
  }