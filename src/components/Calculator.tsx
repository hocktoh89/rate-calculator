"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SOURCE_CURRENCIES_OPTIONS } from "@/app/page";
import { useCalculatorContext } from "@/context/CalculatorContext";
import { Button, Stack, Typography } from "@mui/material";
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
<<<<<<< HEAD
<<<<<<< HEAD
      <Button>Added Extra Stuff for Testing Purpose</Button>
=======
      <Typography>HGello</Typography>
>>>>>>> 0bfca01 (rebase parent rename component)
=======
      <Typography>HGello</Typography>
=======
      <Button>Added Extra Stuff for Testing Purpose</Button>
>>>>>>> 33a3b31 (rebase test commit 6)
>>>>>>> 9f73b78 (rebase test commit 6)
    </Stack>
  );
};

export default Calculator;
