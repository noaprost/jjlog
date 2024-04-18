import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jjlog",
  description: "my blog!",
};

<Head>
  <meta
    http-equiv="Content-Security-Policy"
    content="upgrade-insecure-requests"
  />
</Head>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <hr />
          <section className="w-full p-3 px-8">
            <ul className="flex lg:gap-32 sm:gap-12 gap-8 justify-center items-center">
              <li className="text-xl">
                <Link href="/">home</Link>
              </li>
              <li className="text-xl">
                <Link href="/posts">posts</Link>
              </li>
              <li className="text-xl">
                <Link href="/about">about</Link>
              </li>
              <li className="text-xl">
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </section>
          <hr />
          <br />
          <section className="h-full">{children}</section>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
