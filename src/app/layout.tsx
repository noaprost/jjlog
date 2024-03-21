import type { Metadata } from "next";
import { Imprima } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import DarkModeToggleButton from "@/components/DarkModeToggleButton";

const inter = Imprima({ weight: "400", subsets: ["latin"] });

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
          <Link href="/" className="text-lg font-semibold">
            JJ&apos;s Blog
          </Link>
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
            <li>
              <DarkModeToggleButton />
            </li>
          </ul>
        </header>
        <section className="h-full">{children}</section>
        <footer className="text-center p-2 text-sm">
          ©️noaprost | All Right Reserved.
        </footer>
      </body>
    </html>
  );
}
