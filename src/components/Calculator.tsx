import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Calculator = ({ getRates }) => {
  return (
    <Stack direction={"column"}>
      <Typography variant="h4">Rate calculator</Typography>
      <Button onClick={getRates}>Get Rate</Button>
    </Stack>
  );
};

export default Calculator;
