"use client";

import Calculator from "@/components/Calculator";
import CalculatorContextProvider from "@/context/CalculatorContext";
import { List, Stack } from "@mui/material";
import styles from "./page.module.css";

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
    <CalculatorContextProvider>
      <div className={styles.page}>
        <main className={styles.main}>
          <Stack direction={{ md: "row", sx: "column" }} gap={3}>
            <Calculator />
            <List> Hey List</List>
          </Stack>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </CalculatorContextProvider>
  );
}
