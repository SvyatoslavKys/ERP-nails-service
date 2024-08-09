import "./globals.scss";

import { Montserrat } from "next/font/google";


import styles from "./page.module.scss";
import Head from "next/head";
import Header from "@/libs/components/header/header";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>{children}</main>
      </body>
      
    </html>
  );
}
