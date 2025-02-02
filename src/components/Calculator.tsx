/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Stack, TextField } from "@mui/material";
// import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Calculator = ({ allRates }) => {
  const onItemChange = (value) => {
    console.log("   onItemChangex  ", value);
  };

  return (
    <Stack direction={"column"}>
      <Typography variant="h4">Rate calculator</Typography>

      <Stack direction="column">
        <Typography variant="h4">You Pay:</Typography>
        <Autocomplete
          disablePortal
          // getOptionLabel={(option: any) => {
          //   return option.label ? option.label.toString() : "";
          // }}
          options={allRates}
          sx={{ width: 300 }}
          // renderOption={(optionProp: any, option: any, optionState: any) => {
          //   return (
          //     <li {...optionProp}>
          //       <Typography variant="subtitle1">{option.label}</Typography>
          //     </li>
          //   );
          // }}
          // value={inputValue}
          onChange={(item, value) => {
            onItemChange(value);
          }}
          isOptionEqualToValue={(option: any, curValue: any) =>
            option?.value === curValue?.value
          }
          renderInput={(params) => {
            return <TextField {...params} label="Currency" />;
          }}
        />
      </Stack>

      <Typography variant="h4">You Get:</Typography>

      {/* <Button onClick={getRates}>Get Rate</Button> */}
    </Stack>
  );
};

export default Calculator;
