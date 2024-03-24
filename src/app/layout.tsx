import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LoginInfo from "@/components/LoginInfo";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

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
        <header className="flex justify-between p-4 mx-8">
          <Link href="/" className="text-lg font-semibold">
            JJBlog
          </Link>
          <LoginInfo />
        </header>
        <hr />
        <section>
          <ul className="flex p-3 justify-center items-center mx-auto">
            <li className="mr-32">
              <Link href="/">home</Link>
            </li>
            <li className="mr-32">
              <Link href="/posts">posts</Link>
            </li>
            <li className="mr-32">
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </section>
        <hr />
        <br />
        <section className="h-full">
          <AuthContextProvider>{children}</AuthContextProvider>
        </section>
        <footer className="text-center p-2 text-sm">
          ©️noaprost | All Right Reserved.
        </footer>
      </body>
    </html>
  );
}
