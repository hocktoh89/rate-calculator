"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SOURCE_CURRENCIES_OPTIONS } from "@/app/page";
import { useCalculatorContext } from "@/context/CalculatorContext";
import { Stack, Typography } from "@mui/material";
import CalculatorInput from "./CalculatorInput";

const Calculator = () => {
  const {
    onPayAmtChanged,
    onReceiveAmtChanged,
    receiveAmt,
    payAmount,
    receivedCurNRates,
    onFromCurrencyChanged,
    onToCurrencyChanged,
    offeredRate,
  }: any = useCalculatorContext() || {};

  return (
    <Stack direction={"column"} rowGap={3} columnGap={2}>
      <Typography variant="h4">Rate calculator</Typography>
      <CalculatorInput
        compHeaderLabel={"You Pay:"}
        amount={payAmount}
        onAmtChange={onPayAmtChanged}
        rateOptions={SOURCE_CURRENCIES_OPTIONS}
        onCurrencyChange={onFromCurrencyChanged}
      />
      <Typography variant="h6">
        Exchange Rates: <>{offeredRate}</>
      </Typography>
      <CalculatorInput
        compHeaderLabel={"Recipient Get:"}
        rateOptions={receivedCurNRates}
        onAmtChange={onReceiveAmtChanged}
        amount={receiveAmt}
        onCurrencyChange={onToCurrencyChanged}
      />
    </Stack>
  );
};

export default Calculator;
