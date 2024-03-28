import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modern Clinic Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div 
      className="w-screen min-h-screen bg-gradient-to-b from-gray-50 to-[#e2f0ff]">
          <div className="h-24 flex items-center">
          <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)] overflow-auto">
          {children}
          </div>
      </div>
        </body>
    </html>
  );
}
