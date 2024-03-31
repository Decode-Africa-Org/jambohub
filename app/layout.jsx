import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jambo Hub",
  description: "Jambo Hub, Let's connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
