import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
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
      <body className={`${inter.className}  bg-gray-50`}>
        <div className="min-w-72">
            {children}
        </div>
      </body>
    </html>
  );
}

// Min Page With = 288px 18rem min-w-72