import Navbar from "@/components/common/Navbar";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cooper",
  description: "Cooper is a platform for co-working",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
