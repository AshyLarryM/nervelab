import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/components/NextAuthProvider";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";
import { Toaster } from "react-hot-toast";

const inter = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nerve Lab",
  description: "Multiplayer Online Game",
};

const toastOptions = {
  style: {
    background: "#333",
    color: "#fff",
    marginTop: '20px',
  },
  success: {
    style: {
      background: "transparent",
    },
  },
  error: {
    style: {
      background: "red",
    },
  },
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
                <Toaster position="top-center" toastOptions={toastOptions} />
              </main>
            </div>
          </NextAuthProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
