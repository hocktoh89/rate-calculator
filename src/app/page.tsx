"use client";

import { fetchRates } from "@/api/rates";
import Calculator from "@/components/Calculator";
import { List, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [allRates, setAllRates] = useState([]);

  const getRates = async () => {
    try {
      const results = await fetchRates();
      // const result = Response.json(rates);
      const { success, quotes, source } = results || {};
      if (success) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const quotesArr: any = [];

        for (const [key, value] of Object.entries(quotes)) {
          const cleanCurrency = key.replace(source, "");
          quotesArr.push({
            label: cleanCurrency,
            currency: cleanCurrency,
            rate: value,
          });
        }

        setAllRates(quotesArr);
      }
    } catch (err) {
      console.error("Main: ", err);
    }
  };

  useEffect(() => {
    console.log("   main rendered");
    getRates();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Stack direction={{ md: "row", sx: "column" }} gap={3}>
          <Calculator allRates={allRates} />
          <List> Hey List</List>
        </Stack>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
