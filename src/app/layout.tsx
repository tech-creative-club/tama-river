import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/NextAuth";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tamariver-agent",
  description: "created by 技創くらぶ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <NextAuthProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </NextAuthProvider>
    </html>
  );
}
