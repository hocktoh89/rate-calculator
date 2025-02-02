export async function fetchRates() {
    const res = await fetch("https://api.exchangerate.host/live?access_key=e2062d91663a80d02d0319acf81a103c&format=1");
    console.log(" res", res);
    if (!res.ok) throw new Error("Failed to fetch rates");
    return res.json();
  }