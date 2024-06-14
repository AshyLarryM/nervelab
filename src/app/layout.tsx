import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nerve Lab",
  description: "Multiplayer Online Game",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full bg-dark-futuristic ${inter.className}`}>
        <div className="flex flex-col h-full ">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
