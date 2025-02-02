// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchRates(source?) {

  const queryParams = source ? `&source=${source}` : '';

    const res = await fetch(`https://api.exchangerate.host/live?access_key=e2062d91663a80d02d0319acf81a103c&format=1${queryParams}`);
    if (!res.ok) throw new Error("Failed to fetch rates");
    return res.json();
  }

  // TO-DO: current subscriptions versions not supported hence cannot be used.
  export async function convertCurrency() {
    const res = await fetch("https://api.exchangerate.host/convert?from=EUR&to=GBP&amount=100&access_key=e2062d91663a80d02d0319acf81a103c");
    if (!res.ok) throw new Error("Failed to convert rates");
    return res.json();
  }