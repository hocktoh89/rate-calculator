"use client";

import { fetchRates } from "@/api/rates";
import Calculator from "@/components/Calculator";
import { List, Stack } from "@mui/material";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const getRates = async () => {
    try {
      const rates = await fetchRates();
      console.log("  rate  ", rates);
      return Response.json(rates);
    } catch (err) {
      console.error("Main: ", err);
    }
  };

  useEffect(() => {
    getRates();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Stack direction={{ md: "row", sx: "column" }} gap={3}>
          <Calculator getRates={getRates} />
          <List> Hey List</List>
        </Stack>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
