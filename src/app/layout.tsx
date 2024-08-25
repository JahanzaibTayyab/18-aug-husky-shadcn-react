import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-200 h-12 flex gap-5 px-5 font-bold items-center">
          <Link href={"/"}>Home</Link>
          <Link href="/reactAdvanced">React Advanced</Link>
          <Link href="/reactAdvanced/reactStates">React States</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
