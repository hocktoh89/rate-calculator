import { fetchRates } from "@/api/rates";
import { createContext, useContext, useEffect, useState } from "react";

export const CalculatorContext = createContext({});

const CalculatorContextProvider = (props) => {
  const [receiveAmt, setReceiveAmt] = useState(0.0);
  const [payAmount, setPayAmount] = useState(0.0);
  const [receivedRates, setReceivedRates] = useState([]);

  const getRates = async () => {
    try {
      const results = await fetchRates();
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

        setReceivedRates(quotesArr);
      }
    } catch (err) {
      console.error("Main: ", err);
    }
  };

  useEffect(() => {
    getRates();
  }, []);

  const onPayAmtChanged = (e) => {
    setPayAmount(e?.target.value);
  };

  const onReceiveAmtChanged = (e) => {
    setReceiveAmt(e?.target?.value);
  };

  const contextProps = {
    onReceiveAmtChanged,
    receiveAmt,
    onPayAmtChanged,
    payAmount,
    receivedRates,
  };

  return (
    <CalculatorContext.Provider value={contextProps}>
      {props.children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  return useContext(CalculatorContext);
};

export default CalculatorContextProvider;
