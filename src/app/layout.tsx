import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/components/NextAuthProvider";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nerve Lab",
  description: "Multiplayer Online Game",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en" className="h-full">
        <body className={`h-full bg-dark-futuristic ${inter.className}`}>
          <NextAuthProvider>
            <div className="flex flex-col h-full ">
              <main className="flex-1">
                {children}
              </main>
            </div>
          </NextAuthProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
