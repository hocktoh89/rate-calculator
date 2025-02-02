"use client";

import Calculator from "@/components/Calculator";
import CalculatorContextProvider from "@/context/CalculatorContext";
import HistoryContextProvider from "@/context/HistoryContext";
import { Stack } from "@mui/material";
import styles from "./page.module.css";
import HistoryList from "@/components/HistoryList";

export const SOURCE_CURRENCIES_OPTIONS = [
  {
    label: "USD",
    currency: "USD",
    rate: 0.0,
  },
  {
    label: "GBP",
    currency: "GBP",
    rate: 0.0,
  },
  {
    label: "MYR",
    currency: "MYR",
    rate: 0.0,
  },
  {
    label: "SGD",
    currency: "SGD",
    rate: 0.0,
  },
];

export default function Home() {
  return (
    <HistoryContextProvider>
      <CalculatorContextProvider>
        <div className={styles.page}>
          <main className={styles.main}>
            <Stack direction={{ md: "row", sx: "column" }} gap={3}>
              <Calculator />
              <HistoryList />
            </Stack>
          </main>
          <footer className={styles.footer}></footer>
        </div>
      </CalculatorContextProvider>
    </HistoryContextProvider>
  );
}
