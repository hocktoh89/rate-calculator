"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import ButtonA from "@/components/Button";
import { fetchRates } from "@/api/rates";

export default function Home() {
  useEffect(() => {
    const getRates = async () => {
      try {
        const rates = await fetchRates();
        console.log("  rate  ", rates);
        return Response.json(rates);
      } catch (err) {
        console.error("Main: ", err);
      }
    };
    getRates();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ButtonA />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
