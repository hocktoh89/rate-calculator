import { formatDateWithDash } from "@/lib/Date";
import { isEmpty } from "@/lib/String";
import { useQuery } from "@tanstack/react-query";

export async function fetchRateHistory(date?) {
    try {
        const queryParams = date ? `&date=${formatDateWithDash(date)}` : '';
    
        const res = await fetch(`https://api.exchangerate.host/historical?access_key=e2062d91663a80d02d0319acf81a103c${queryParams}`);

        if (!res.ok) throw new Error(`Failed to fetch histories on ${date}`);

        const {error: errMsgFromSuccessRes} = await res.json();
          if(!isEmpty(errMsgFromSuccessRes)) {
            throw new Error(errMsgFromSuccessRes?.info);
        }
                
        return res.json();
    } catch (err) {
        throw err;
    }
}

export function useRateHistoryCache(date?) {
    return useQuery({
      queryKey: ["rateHistories", date],
      queryFn: () => fetchRateHistory(
        date
      ),
      throwOnError: true,
      staleTime: 2 * 60 * 1000, // 2 minutes (keeps data fresh for this duration)
      refetchInterval: 2 * 60 * 1000, // Auto refetch every 2 minutes
      refetchOnWindowFocus: false, // Refetch when user focuses the tab
    });
  }


// timeframe?start_date=2015-01-01&end_date=2015-05-01