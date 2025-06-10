"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SOURCE_CURRENCIES_OPTIONS } from "@/app/page";
import { useCalculatorContext } from "@/context/CalculatorContext";
import { Button, Stack, Typography } from "@mui/material";
import CalculatorInput from "./CalculatorInput";

<<<<<<<< HEAD:src/components/CalculatorKeepName.tsx
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/components/CalculatorKeepName.tsx
>>>>>>> 79cf03a (rebase test commit 1)
const CalculatorKeepName = () => {
========
const CalculatorRebaseTest = () => {
>>>>>>>> b6daa90 (rebase test commit 1):src/components/CalculatorRebaseTest.tsx
<<<<<<< HEAD
=======
========
const CalculatorRebaseTest = () => {
>>>>>>>> 79cf03a (rebase test commit 1):src/components/CalculatorRebaseTest.tsx
>>>>>>> 79cf03a (rebase test commit 1)
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
      <Button>Added Extra Stuff for Testing Purpose</Button>
    </Stack>
  );
};

<<<<<<<< HEAD:src/components/CalculatorKeepName.tsx
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/components/CalculatorKeepName.tsx
>>>>>>> 79cf03a (rebase test commit 1)
export default CalculatorKeepName;
========
export default CalculatorRebaseTest;
>>>>>>>> b6daa90 (rebase test commit 1):src/components/CalculatorRebaseTest.tsx
<<<<<<< HEAD
=======
========
export default CalculatorRebaseTest;
>>>>>>>> 79cf03a (rebase test commit 1):src/components/CalculatorRebaseTest.tsx
>>>>>>> 79cf03a (rebase test commit 1)
