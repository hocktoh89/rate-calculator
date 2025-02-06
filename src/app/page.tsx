"use client";

import Calculator from "@/components/Calculator";
import HistoryList from "@/components/HistoryList";
import CalculatorContextProvider from "@/context/CalculatorContext";
import HistoryContextProvider from "@/context/HistoryContext";
import { Stack } from "@mui/material";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import styles from "./page.module.css";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      return toast.error(`Something went wrong: ${error.message}`);
    },
  }),
});

const persister = createSyncStoragePersister({
  storage: window.localStorage, // or IndexedDB for larger datasets
});

persistQueryClient({
  queryClient,
  persister,
});

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HistoryContextProvider>
        <CalculatorContextProvider>
          <div className={styles.page}>
            <main className={styles.main}>
              <Stack direction={{ md: "row", sx: "column" }} gap={3}>
                <Calculator />
                <HistoryList />
                <Toaster />
              </Stack>
            </main>
            <footer className={styles.footer}></footer>
          </div>
        </CalculatorContextProvider>
      </HistoryContextProvider>
    </QueryClientProvider>
  );
}
