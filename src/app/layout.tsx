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
  title: "jjblog",
  description: "This is our blog!",
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
  const menu = ["home", "posts", "about", "contact"];
  return (
    <html lang="en">
      <body
        className={`${inter.className} vsc-initialized`}
        suppressHydrationWarning={true}
      >
        <AuthProvider>
          <Header />
          <hr />
          <section className="w-full p-3 px-8">
            <ul className="flex lg:gap-32 sm:gap-12 gap-8 justify-center items-center">
              {menu.map((text) => (
                <li key={text} className="text-xl">
                  <Link href={`/${text !== "home" ? text : ""}`}>{text}</Link>
                </li>
              ))}
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
