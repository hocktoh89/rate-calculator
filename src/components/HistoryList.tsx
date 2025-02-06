/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useHistoryContext } from "@/context/HistoryContext";
import { List, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Fragment } from "react";

const HistoryList = () => {
  const { setEndDate, historicalRates }: any = useHistoryContext() || {};
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" onChange={setEndDate} />
        </DemoContainer>
      </LocalizationProvider>
      <Typography variant="h6">Rates for Dates: </Typography>
      <List>
        {historicalRates?.map((x, index) => {
          return (
            <Fragment key={index}>
              {x?.currency} : {x?.rate}, <br />
            </Fragment>
          );
        })}
      </List>
    </>
  );
};
export default HistoryList;
