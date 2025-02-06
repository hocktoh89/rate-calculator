import { formatDateWithDash } from "@/lib/Date";
import { isEmpty } from "@/lib/String";
import { useQuery } from "@tanstack/react-query";
import { RATE_API_URL } from ".";

export async function fetchRateHistory(date?) {
    try {
        const queryParams = date ? `&date=${formatDateWithDash(date)}` : '';  
        const res = await fetch(`${RATE_API_URL}/historical?access_key=${process.env.NEXT_PUBLIC_RATE_API_ACCESS}${queryParams}`);

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
      staleTime: 10 * 60 * 1000, // 10 minutes (keeps data fresh for this duration)
      refetchInterval: 10 * 60 * 1000, // Auto refetch every 10 minutes
      refetchOnWindowFocus: false, // Refetch when user focuses the tab
    });
  }


// timeframe?start_date=2015-01-01&end_date=2015-05-01