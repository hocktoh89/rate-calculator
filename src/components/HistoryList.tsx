/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useHistoryContext } from "@/context/HistoryContext";
import { List } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const HistoryList = () => {
  const { setEndDate }: any = useHistoryContext() || {};
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" onChange={setEndDate} />
        </DemoContainer>
      </LocalizationProvider>
      <List> Hey List</List>
    </>
  );
};
export default HistoryList;
