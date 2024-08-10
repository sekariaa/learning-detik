import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/BootstrapClient";
import { Roboto } from "next/font/google";
import "./globals.css";
import "../styles/customTheme.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Learning By Detikcom",
  description: "Learning By Detikcom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/android-icon-192x192.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={roboto.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
