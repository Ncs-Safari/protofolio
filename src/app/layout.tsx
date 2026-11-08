import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eri Safari",
  description: "Software Engineer – C# / .NET & React / Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-300 text-slate-400 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
