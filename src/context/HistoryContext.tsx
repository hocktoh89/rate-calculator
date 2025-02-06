// import { fetchRateHistory, useRateHistoryCache } from "@/api/history";
// import { createContext, useContext, useEffect, useState } from "react";
import { useRateHistoryCache } from "@/api/history";
import { createContext, useContext, useEffect, useState } from "react";

export const HistoryContext = createContext({});

const HistoryContextProvider = (props) => {
  const [historicalRates, setHistoricalRates] = useState([]);

  // To-Do: hard code 14 days for now
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date());

  const {
    data: rateHistoriesCache,
    error: cacheError,
    status: cacheStatus,
  } = useRateHistoryCache(endDate);

  const { quotes, success, source } = rateHistoriesCache || {};

  console.log("   rate  HIstories Cache", rateHistoriesCache);
  console.log("   rate  HIstories cacheError", cacheError);
  console.log("   rate  HIstories cacheStatus", cacheStatus);

  useEffect(() => {
    if (quotes && success) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const quotesArr: any = [];

      for (const [key, value] of Object.entries(quotes)) {
        const cleanCurrency = key.replace(source, "");
        quotesArr.push({
          label: cleanCurrency,
          currency: cleanCurrency,
          rate: value,
        });
      }

      setHistoricalRates(quotesArr);
    }
  }, [quotes]);

  const contextProps = {
    historicalRates,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };

  return (
    <HistoryContext.Provider value={contextProps}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => {
  return useContext(HistoryContext);
};

export default HistoryContextProvider;
