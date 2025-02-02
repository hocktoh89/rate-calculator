import { formatDateWithDash } from "@/lib/Date";

export async function fetchRateHistory(date?) {
    try {
        const queryParams = date ? `&date=${formatDateWithDash(date)}` : '';
    
        const res = await fetch(`https://api.exchangerate.host/historical?access_key=e2062d91663a80d02d0319acf81a103c${queryParams}`);
        if (!res.ok) throw new Error(`Failed to fetch histories on ${date}`);
        return res.json();
    } catch (err) {
        console.error('fetchRateHistory: ', err);
    }
}

// timeframe?start_date=2015-01-01&end_date=2015-05-01