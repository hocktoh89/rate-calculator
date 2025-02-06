/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useHistoryContext } from "@/context/HistoryContext";
import { List, Stack, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Fragment } from "react";

const HistoryList = () => {
  const { setEndDate, endDate, date14daysAgo, historicalRates }: any =
    useHistoryContext() || {};
  return (
    <>
      <Stack direction="column" gap={2}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Basic date picker" onChange={setEndDate} />
          </DemoContainer>
        </LocalizationProvider>
        <Typography variant="h6">
          Rates for Dates Between: {date14daysAgo.toString()} -{" "}
          {endDate.toString()}
        </Typography>
        <List>
          {historicalRates?.map((x, index) => {
            return (
              <Fragment key={index}>
                <Stack direction={"column"} gap={0.5}>
                  <Typography variant="h6">{x?.date}</Typography>
                  <Typography variant="h6">
                    {x?.currency} : {x?.rate}
                  </Typography>
                </Stack>
                <br />
              </Fragment>
            );
          })}
        </List>
      </Stack>
    </>
  );
};
export default HistoryList;
