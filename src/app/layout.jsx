import "./globals.scss";

import { Montserrat } from "next/font/google";


import styles from "./page.module.scss";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
     
      <body className={montserrat.className} suppressHydrationWarning={true}>
       
        <main className={styles.page}>{children}</main>
       
      </body>
      
    </html>
  );
}
