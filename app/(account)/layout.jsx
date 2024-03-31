import { Inter } from "next/font/google";
import "../globals.css";
import "@/assets/styles.css";
import "@/assets/custom.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Decode Africa",
  description: "Decode Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        {children}
        <Script src="/assets/js/custom.js" />
        <Script src="/assets/js/uikit.min.js" />
        <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      </body>
    </html>
  );
}
