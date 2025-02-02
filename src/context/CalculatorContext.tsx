import { convertCurrency, fetchRates } from "@/api/rates";
import { isEmpty } from "@/lib/String";
import { createContext, useContext, useEffect, useState } from "react";

export const CalculatorContext = createContext({});

const CalculatorContextProvider = (props) => {
  const [receiveAmt, setReceiveAmt] = useState(0.0);
  const [payAmount, setPayAmount] = useState(0.0);
  const [offeredRate, setOfferedRate] = useState(0.0);
  const [receivedCurNRates, setReceivedCurNRates] = useState([]);
  const [selectedFromCurrency, setSelectedFromCurrency] = useState("");
  const [selectedToCurrency, setSelectedToCurrency] = useState("");

  const getRates = async () => {
    try {
      const results = await fetchRates(selectedFromCurrency);
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

        setReceivedCurNRates(quotesArr);
      }
    } catch (err) {
      console.error("CalculatorContext - getRates: ", err);
    }
  };

  const calculateRates = async (payAmt, fromCurrency, toCurrency) => {
    try {
      const results = await convertCurrency(payAmt, fromCurrency, toCurrency);
      const { success, result } = results || {};
      if (success) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        setReceiveAmt(result);
      }
    } catch (err) {
      console.error("CalculatorContext - calculateRates: ", err);
    }
  };

  useEffect(() => {
    getRates();
  }, []);

  useEffect(() => {
    if (!isEmpty(selectedFromCurrency)) {
      getRates();
    }
  }, [selectedFromCurrency]);

  useEffect(() => {
    if (
      payAmount > 0 &&
      !isEmpty(selectedToCurrency) &&
      !isEmpty(selectedFromCurrency)
    ) {
      calculateRates(payAmount, selectedFromCurrency, selectedToCurrency);
    }
  }, [payAmount, selectedToCurrency, selectedFromCurrency]);

  const onPayAmtChanged = (e) => {
    setPayAmount(e?.target.value);
  };

  const onReceiveAmtChanged = (e) => {
    setReceiveAmt(e?.target?.value);
  };

  const onFromCurrencyChanged = (e) => {
    setSelectedFromCurrency(e?.currency);
  };

  const onToCurrencyChanged = (e) => {
    setSelectedToCurrency(e?.currency);
    console.log(e);
    setOfferedRate(e?.rate);
  };

  const contextProps = {
    onReceiveAmtChanged,
    receiveAmt,
    onPayAmtChanged,
    payAmount,
    receivedCurNRates,
    selectedFromCurrency,
    onFromCurrencyChanged,
    selectedToCurrency,
    setSelectedToCurrency,
    onToCurrencyChanged,
    offeredRate,
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
