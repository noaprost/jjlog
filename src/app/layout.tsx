import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jjlog",
  description: "my blog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between p-6">
          <Link href="/" className="text-xl font-semibold">JJ&apos;s Blog</Link>
          <ul className="flex w-96 justify-around">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/posts">posts</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </header>
        <section className="h-screen">{children}</section>
        <footer className="text-center p-2">
          ©️noaprost | All Right Reserved.
        </footer>
      </body>
    </html>
  );
}
