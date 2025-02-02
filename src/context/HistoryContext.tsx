import { fetchRateHistory } from "@/api/history";
import { createContext, useContext, useEffect, useState } from "react";

export const HistoryContext = createContext({});

const HistoryContextProvider = (props) => {
  const [historicalRates, setHistoricalRates] = useState([]);
  // To-Do: hard code 14 days for now
  //   const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date());

  const getHistoricalRates = async () => {
    try {
      const results = await fetchRateHistory(endDate);
      const { success, quotes, source } = results || {};
      if (success) {
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
    } catch (err) {
      console.error("HistoricalContext - getHistoricalRates: ", err);
    }
  };

  useEffect(() => {
    getHistoricalRates();
  }, [endDate]);

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
