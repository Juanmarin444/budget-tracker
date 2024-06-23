import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Budget Tracker",
  description: "Easily track your monthly budget with our Budget Tracker dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-gray-50`}>{children}</body>
    </html>
  );
}
