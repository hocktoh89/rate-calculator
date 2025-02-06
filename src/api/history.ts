import { formatDateWithDash } from "@/lib/Date";
import { isEmpty } from "@/lib/String";
import { useQuery } from "@tanstack/react-query";
import { RATE_API_URL } from ".";

// Hard coded to fetch these currencies only CNY,EUR,SGD,JPY,HKD
export async function fetchRateHistory(date?, date14daysAgo?) {
    try {
        let queryParams = date ? `&end_date=${formatDateWithDash(date)}` : '';  
        queryParams += date14daysAgo ? `&start_date=${formatDateWithDash(date14daysAgo)}` : '';  

        const res = await fetch(`${RATE_API_URL}/timeframe?access_key=${process.env.NEXT_PUBLIC_RATE_API_ACCESS}${queryParams}&currencies=CNY,EUR,SGD,JPY,HKD`);
        const clonedRes = res.clone();

        if (!clonedRes.ok) throw new Error(`Failed to fetch histories on ${date}`);

        const {error: errMsgFromSuccessRes} = await clonedRes.json();
          if(!isEmpty(errMsgFromSuccessRes)) {
            throw new Error(errMsgFromSuccessRes?.info);
        }
                
        return res.json();
    } catch (err) {
        throw err;
    }
}


export function useRateHistoryCache(date?, date14daysAgo?) {
    return useQuery({
      queryKey: ["rateHistories", date, date14daysAgo],
      queryFn: () => fetchRateHistory(
        date, date14daysAgo
      ),
      throwOnError: true,
      staleTime: 10 * 60 * 1000, // 10 minutes (keeps data fresh for this duration)
      refetchInterval: 10 * 60 * 1000, // Auto refetch every 10 minutes
      refetchOnWindowFocus: false, // Refetch when user focuses the tab
    });
  }


// timeframe?start_date=2015-01-01&end_date=2015-05-01