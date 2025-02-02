/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Stack, TextField, Typography } from "@mui/material";

const CalculatorInput = ({
  compHeaderLabel,
  rateOptions,
  onAmtChange,
  amount,
  onCurrencyChange,
}) => {
  return (
    <Stack direction="column">
      <Typography variant="h6">{compHeaderLabel}</Typography>
      <Stack direction="row" gap={2}>
        <Autocomplete
          disablePortal
          options={rateOptions}
          sx={{ width: 140 }}
          onChange={(item, value) => {
            onCurrencyChange(value);
          }}
          isOptionEqualToValue={(option: any, curValue: any) =>
            option?.value === curValue?.value
          }
          renderInput={(params) => {
            return <TextField {...params} label="Currency" />;
          }}
        />
        <TextField
          type="number"
          variant="outlined"
          value={amount}
          onChange={onAmtChange}
        />
      </Stack>
    </Stack>
  );
};

export default CalculatorInput;
